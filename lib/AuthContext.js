import React, { createContext, useEffect, useState, useContext } from 'react'
import fetch from 'isomorphic-fetch'
// modo de ligação entre contextos.
export const AuthContext = createContext()
//provedor, provê dados para outros componentes.
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [isAuthReady, setAuthReady] = useState(false)
  useEffect(() => {
    const getMe = async () => {
      const res = await fetch('/api/me')
      const authUser = await res.json()
      setUser(authUser)
      //certeza de log do usuário.
      setAuthReady(true)
    }
    getMe()
  }, [])
  return (
    <AuthContext.Provider value={{ user, isAuthReady, isAuth: !user.error }}>
      {children}
    </AuthContext.Provider>
  )
}
// função que retorna 
export const useAuth = () => {
  return useContext(AuthContext)
}
