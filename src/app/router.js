export const MODES = {
  psychology: 'psychology',
  data: 'data',
}

const MODE_SLUGS = {
  [MODES.psychology]: 'psicologia',
  [MODES.data]: 'dados',
}

export function getBasePath() {
  const onGithubPages = window.location.hostname.endsWith('github.io')
  return onGithubPages ? '/ricardo-professional-site/' : '/'
}

export function getModeFromPath(pathname = window.location.pathname) {
  if (pathname.endsWith('/dados')) return MODES.data
  return MODES.psychology
}

export function getModePath(mode) {
  return `${getBasePath()}${MODE_SLUGS[mode]}`
}

export function isKnownModePath(pathname = window.location.pathname) {
  return pathname.endsWith('/psicologia') || pathname.endsWith('/dados')
}
