import { createContext, useState, useEffect } from 'react'

export const Allcontext = createContext({})

export const ContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false)

  const handleLogin = (newState) => {
    setLogin(newState)
    window.localStorage.isLogin = JSON.stringify(newState)
  }

  const isLoginCache = window.localStorage.isLogin
  useEffect(() => {
    if (isLoginCache) setLogin(JSON.parse(isLoginCache))
  }, [])

  const initialState = {
    isLogin, handleLogin
  }

  return (
    <Allcontext.Provider value={initialState}>
      {children}
    </Allcontext.Provider>
  )
}
