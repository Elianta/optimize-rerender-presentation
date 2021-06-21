import { createContext, useContextSelector } from 'use-context-selector'
import { useState, useCallback } from 'react'

const NavContext = createContext()

export function NavProvider({ children }) {
  const [visibility, setVisibility] = useState({
    menu: false,
    user: false,
  })

  const toggleVisibility = item => () => {
    setVisibility(prevState => {
      const newState = Object.keys(prevState).reduce((acc, key) => {
        if (key === item) {
          acc[key] = !acc[key]
        } else {
          acc[key] = false
        }
        return acc
      }, prevState)

      return { ...prevState, ...newState }
    })
  }

  const toggleMenu = useCallback(toggleVisibility('menu'), [])
  const toggleUser = useCallback(toggleVisibility('user'), [])

  return (
    <NavContext.Provider
      value={{
        visibility,
        toggleMenu,
        toggleUser,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}

export function useNav(fn) {
  return useContextSelector(NavContext, fn)
}
