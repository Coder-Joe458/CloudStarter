'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export default function Navigation() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }



  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-lg' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <i className="fas fa-rocket text-2xl text-primary-600"></i>
            <span className="text-xl font-bold text-gray-900">CloudStarter</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('why')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.why')}
            </button>
            <button
              onClick={() => scrollToSection('who')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.who')}
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
            >
              {t('nav.waitlistShort')}
            </button>
            
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-2 rounded-lg font-medium hover:from-primary-700 hover:to-primary-600 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {t('nav.waitlist')}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <span className={`block w-6 h-0.5 bg-current transition-transform ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-opacity ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-transform ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('why')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-left"
            >
              {t('nav.why')}
            </button>
            <button
              onClick={() => scrollToSection('who')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-left"
            >
              {t('nav.who')}
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-left"
            >
              {t('nav.waitlistShort')}
            </button>
            <button
              onClick={() => scrollToSection('waitlist')}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-lg font-medium text-center"
            >
              {t('nav.waitlist')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 