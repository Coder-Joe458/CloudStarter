'use client'

// Simplified English-only texts
export const texts = {
  // Navigation
  'nav.why': 'Why Us',
  'nav.who': 'Who',
  'nav.waitlist': 'Join Beta Waitlist',
  'nav.waitlistShort': 'Waitlist',
  
  // Hero Section
  'hero.title': 'Deploy your backend services to the cloud with one click',
  'hero.subtitle': 'From code to production, just one click. No need to configure servers, CI/CD or cloud platform permissions.',
  'hero.learnMore': 'Learn More',
  'hero.joinWaitlist': 'Join Beta Waitlist',
  'hero.configTime': 'Config Time',
  'hero.clickDeploy': 'Click Deploy',
  'hero.earlyUsers': 'Early Users',
  'hero.betaOpen': 'Beta access now open',
  
  // Platforms
  'platforms.title': 'Supports Multiple Tech Stacks and Platforms',
  
  // Why Section
  'why.title': 'Why Choose CloudStarter?',
  'why.subtitle': 'Say goodbye to complex configurations, focus on product development',
  'why.noConfig': '🚫 No More Complex Configurations',
  'why.noConfigDesc': 'No more complex AWS, Docker, CI/CD configurations',
  'why.smartDetection': '⚙️ Smart Tech Stack Detection',
  'why.smartDetectionDesc': 'Supports Node.js / Python / Go / Dockerfile auto-detection',
  'why.oneStop': '🔒 One-Stop Environment Setup',
  'why.oneStopDesc': 'Environment variables, database connections, HTTPS all in one step',
  'why.multiPlatform': '📦 Multi-Platform Deployment',
  'why.multiPlatformDesc': 'Deploy to Cloud Run, Fly.io, AWS Fargate and more',
  
  // Who Section
  'who.title': 'Who is it for?',
  'who.subtitle': 'Tailored for different types of developers and teams',
  'who.founders': 'Non-Technical Founders',
  'who.foundersDesc': 'No need to write DevOps, easily deploy MVP services',
  'who.indie': 'Indie Developers',
  'who.indieDesc': 'Side projects go live quickly, no server configuration needed',
  'who.teams': 'Small Teams',
  'who.teamsDesc': 'Save dozens of hours of ops time every month',
  
  // CTA Section
  'cta.title': 'Ready to say goodbye to complex deployments?',
  'cta.subtitle': 'Join our beta waitlist to be among the first users',
  
  // Waitlist Section
  'waitlist.title': '🚀 Join the Beta Waitlist',
  'waitlist.subtitle': "We'll notify you as soon as CloudStarter is ready!",
  'waitlist.emailPlaceholder': 'Your Email',
  'waitlist.submit': 'Join Waitlist',
  'waitlist.note': 'We promise not to send spam',
  
  // Footer
  'footer.description': 'Making code deployment simple, letting developers focus on creating value.',
  'footer.rights': 'All rights reserved.',
}

export const useLanguage = () => {
  const t = (key: string): string => {
    return texts[key as keyof typeof texts] || key
  }

  return {
    t,
  }
} 