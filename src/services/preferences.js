const PREFERENCES_KEY = 'preferences'

export const getPreferences = () => {
  return JSON.parse(window.localStorage.getItem(PREFERENCES_KEY)) || { showMat: false }
}

export const savePreferences = (prefs) => {
  return window.localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs))
}
