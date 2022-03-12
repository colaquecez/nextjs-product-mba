import { useEffect, useState } from 'react'
import Head from 'next/head'
import * as yup from 'yup'
import { useSignInMutation } from '@/redux/Auth/Auth.api'
import { Container, LabelError } from '@/styles/pages/SignIn'
import { Button, Input, Link } from '@/components'
import Router from 'next/router'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [triggerSignIn, { isLoading, data }] = useSignInMutation()
  const [error, setError] = useState('')

  useEffect(() => {
    if (error) {
      setError('')
    }
  }, [email, password])

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  const loginHandle = async () => {
    const isValidated = await schema.isValid({ email, password })

    if (isValidated) {
      const { data } = await triggerSignIn({
        email,
        password
      })

      if (data?.token) {
        return Router.push('/')
      }
    }
    setError('Preencha todos os campos')
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        {(data?.message || error) && (
          <LabelError>{data?.message || error?.message}</LabelError>
        )}
        <Input
          onChange={event => setEmail(event.target.value)}
          type="text"
          value={email}
          label="Login"
        />
        <Input
          onChange={event => setPassword(event.target.value)}
          value={password}
          type="password"
          label="Senha"
        />
        <Button
          isLoading={isLoading}
          disabled={isLoading}
          onClick={loginHandle}
        >
          Entrar
        </Button>
        <br />
        <Link href="/signup" label="Criar uma conta" />
      </Container>
    </>
  )
}

export default Home
