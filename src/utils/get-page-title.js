import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Par-star'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
