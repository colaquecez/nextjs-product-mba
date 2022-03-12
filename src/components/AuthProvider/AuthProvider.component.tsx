import useAppSelector from '@/hooks/useSelector'
import Router from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '@/components'

interface IAuthProvider {
  children: any
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const { validated } = useAppSelector(state => state.auth)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!validated) {
      Router.push('/signin').then(() => setLoading(false))
    }
  }, [validated])

  if (validated) {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }

  return !loading && children
}

export default AuthProvider
