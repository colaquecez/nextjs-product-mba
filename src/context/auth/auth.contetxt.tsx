import React, { createContext, useContext, useState } from 'react'

interface IUser {
  token: string
  userId: number
  name: string
  phone: string
}

interface IContext {
  user: IUser
  isLogged: boolean
  setIsLogged: any
}

const AuthContext = createContext({} as IContext)
export default function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState<IUser>({
    name: 'teste',
    phone: '',
    token: '',
    userId: null
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogged,
        setIsLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const { isLogged, setIsLogged, user } = useContext(AuthContext)

  return {
    isLogged,
    setIsLogged,
    user
  }
}
