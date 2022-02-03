import { createContext, useState } from 'react'

export const Allcontext = createContext({})

export const ContextProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false)
  const initialState = {
    isLogin, setLogin
  }

  return (
    <Allcontext.Provider value={initialState}>
      {children}
    </Allcontext.Provider>
  )
}
