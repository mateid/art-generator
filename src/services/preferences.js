const PREFERENCES_KEY = 'preferences'

export const getPreferences = () => {
  return JSON.parse(
    window.localStorage.getItem(PREFERENCES_KEY) ||
      JSON.stringify({ frame: false })
  )
}

export const setPreferences = prefs => {
  return window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs))
}
