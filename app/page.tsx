'use client'


import { useLanguage } from '@/hooks/useLanguage'
import Navigation from '@/components/Navigation'

import { useState } from 'react'

export default function HomePage() {
  const { t } = useLanguage()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: any) {
      setError(err.message)
      setTimeout(() => setError(''), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => scrollToSection('waitlist')}
                className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                {t('hero.joinWaitlist')}
              </button>
              <button
                onClick={() => scrollToSection('why')}
                className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all"
              >
                {t('hero.learnMore')}
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">0h</div>
                <div className="text-gray-600">{t('hero.configTime')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1</div>
                <div className="text-gray-600">{t('hero.clickDeploy')}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600">{t('hero.earlyUsers')}</div>
              </div>
            </div>

            {/* Code Window */}
            <div className="code-window max-w-2xl mx-auto">
              <div className="window-header">
                <div className="window-buttons">
                  <div className="window-button btn-close"></div>
                  <div className="window-button btn-minimize"></div>
                  <div className="window-button btn-maximize"></div>
                </div>
                <span className="text-gray-300 text-sm font-medium">Terminal</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">$ cloudstarter deploy</div>
                <div className="text-gray-300 mb-1">🔍 Detecting project type...</div>
                <div className="text-blue-400 mb-1">✅ Found Node.js application</div>
                <div className="text-gray-300 mb-1">🚀 Deploying to Cloud Run...</div>
                <div className="text-green-400 mb-1">✅ Deployment successful!</div>
                <div className="text-cyan-400">🌐 https://your-app.cloudrun.app</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('platforms.title')}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-600' },
              { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
              { name: 'Go', icon: 'fab fa-golang', color: 'text-cyan-600' },
              { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-500' },
              { name: 'Cloud Run', icon: 'fab fa-google', color: 'text-red-500' },
              { name: 'Fly.io', icon: 'fas fa-paper-plane', color: 'text-purple-600' },
            ].map((platform, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                  <i className={`${platform.icon} ${platform.color} text-4xl mb-4`}></i>
                  <h3 className="font-semibold text-gray-900">{platform.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CloudStarter */}
      <section id="why" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('why.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('why.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: 'noConfig', icon: '🚫' },
              { key: 'smartDetection', icon: '⚙️' },
              { key: 'oneStop', icon: '🔒' },
              { key: 'multiPlatform', icon: '📦' },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t(`why.${feature.key}`)}
                </h3>
                <p className="text-gray-600">
                  {t(`why.${feature.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section id="who" className="py-20 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('who.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('who.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { key: 'founders', icon: '👑' },
              { key: 'indie', icon: '💻' },
              { key: 'teams', icon: '👥' },
            ].map((target, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-5xl mb-6 text-center">{target.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {t(`who.${target.key}`)}
                </h3>
                <p className="text-gray-600 text-center text-lg">
                  {t(`who.${target.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-xl"
            >
              {t('hero.joinWaitlist')}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              {t('hero.learnMore')}
            </button>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('waitlist.title')}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            {t('waitlist.subtitle')}
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('waitlist.emailPlaceholder')}
              className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Joining...' : t('waitlist.submit')}
            </button>
          </form>
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-4">
              <div className="flex items-start gap-3">
                <div className="text-green-600 text-xl">✅</div>
                <div>
                  <div className="font-semibold mb-2">Welcome to the waitlist!</div>
                  <div className="text-sm space-y-1">
                    <div>📧 Check your email for confirmation and Discord invite</div>
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-2 rounded-md">
                      <div className="flex items-center gap-2">
                        <span>⚠️</span>
                        <span className="font-medium">Important:</span>
                        <span>Please check your spam/junk folder if you don't see our email</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
              ❌ {error}
            </div>
          )}
          <p className="text-sm text-gray-500 mb-4">
            {t('waitlist.note')}
          </p>
          
          {/* Email Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-600">💡</span>
              <span className="font-semibold text-blue-800">Email Tips</span>
            </div>
            <div className="text-sm text-blue-700 space-y-1">
              <div>• Check your spam/junk folder</div>
              <div>• Add our email to your contacts</div>
              <div>• Look for emails from "CloudStarter"</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <i className="fas fa-rocket text-3xl text-primary-400"></i>
              <span className="text-2xl font-bold">CloudStarter</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('footer.description')}
            </p>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © 2024 CloudStarter. {t('footer.rights')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 