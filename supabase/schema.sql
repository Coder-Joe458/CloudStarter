-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL CHECK (email ~* '^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$'),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'invited', 'registered')),
  source TEXT DEFAULT 'website',
  metadata JSONB DEFAULT '{}'::jsonb
);

-- Enable RLS (Row Level Security)
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_waitlist_status ON waitlist(status);

-- Create a policy to allow inserts (for new signups)
CREATE POLICY "Allow insert waitlist" ON waitlist
FOR INSERT WITH CHECK (true);

-- Create a policy to allow service role to read all
CREATE POLICY "Allow service role to read waitlist" ON waitlist
FOR SELECT USING (auth.role() = 'service_role');

-- Create a policy to allow service role to update
CREATE POLICY "Allow service role to update waitlist" ON waitlist
FOR UPDATE USING (auth.role() = 'service_role');

-- Function to get waitlist stats (optional - for analytics)
CREATE OR REPLACE FUNCTION get_waitlist_stats()
RETURNS JSON AS $$
BEGIN
  RETURN json_build_object(
    'total_users', (SELECT COUNT(*) FROM waitlist),
    'pending_users', (SELECT COUNT(*) FROM waitlist WHERE status = 'pending'),
    'today_signups', (SELECT COUNT(*) FROM waitlist WHERE created_at >= CURRENT_DATE),
    'this_week_signups', (SELECT COUNT(*) FROM waitlist WHERE created_at >= CURRENT_DATE - INTERVAL '7 days')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to service role
GRANT EXECUTE ON FUNCTION get_waitlist_stats() TO service_role; 