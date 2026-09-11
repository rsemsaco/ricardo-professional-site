import { siteConfig } from '../data/siteConfig.js'

const CONSENT_KEY = 'rm-analytics-consent'

export const ANALYTICS_EVENTS = {
  generateLead: 'generate_lead',
  modeSwitch: 'mode_switch',
  sectionNavClick: 'section_nav_click',
  courseInterest: 'course_interest',
  socialClick: 'social_click',
}

const leadTypeByMessageKey = {
  psychologyBooking: 'psychology_booking',
  dataGeneral: 'data_general',
  consulting: 'consulting',
  research: 'research',
  automation: 'automation',
  speaking: 'speaking',
}

function ensureGtag() {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments)
  }
}

function readStoredConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function storeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Continue with in-memory consent state if localStorage is unavailable.
  }
}

function professionalAreaFromPath() {
  return window.location.pathname.includes('/dados') ? 'data' : 'psychology'
}

export function getAnalyticsConsent() {
  if (typeof window === 'undefined') return null
  const value = readStoredConsent()
  return value === 'granted' || value === 'denied' ? value : null
}

export function initializeAnalytics() {
  if (typeof window === 'undefined' || window.__rmGa4Initialized) return

  window.__rmGa4Initialized = true
  ensureGtag()

  if (getAnalyticsConsent() === 'granted') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
  }
}

export function setAnalyticsConsent(value) {
  if (typeof window === 'undefined') return
  ensureGtag()

  const consent = value === 'granted' ? 'granted' : 'denied'
  storeConsent(consent)

  window.gtag('consent', 'update', {
    analytics_storage: consent,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

export function openAnalyticsPreferences() {
  if (typeof window === 'undefined') return
  window.dispatchEvent(new CustomEvent('rm:analytics-preferences'))
}

export function getDefaultActionAnalytics(messageKey, href) {
  if (messageKey === 'course') {
    return {
      eventName: ANALYTICS_EVENTS.courseInterest,
      params: {
        course_name: 'PsIcologiA',
        course_type: 'course_in_development',
        destination: 'whatsapp_interest',
      },
    }
  }

  if (href?.includes('ensino.hcor.com.br/gestao-psicologia-hospitalar')) {
    return {
      eventName: ANALYTICS_EVENTS.courseInterest,
      params: {
        course_name: 'Gestao em Psicologia Hospitalar - HCor',
        course_type: 'external_enrollment',
        destination: 'hcor_course_page',
      },
    }
  }

  const leadType = leadTypeByMessageKey[messageKey]
  if (!leadType) return null

  return {
    eventName: ANALYTICS_EVENTS.generateLead,
    params: { lead_type: leadType },
  }
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !eventName || getAnalyticsConsent() !== 'granted') return
  ensureGtag()

  const eventParams = {
    professional_area: professionalAreaFromPath(),
    page_path: `${window.location.pathname}${window.location.search}`,
    page_title: document.title,
    ...params,
  }

  Object.keys(eventParams).forEach((key) => {
    if (eventParams[key] === undefined || eventParams[key] === null || eventParams[key] === '') {
      delete eventParams[key]
    }
  })

  window.gtag('event', eventName, eventParams)
}
