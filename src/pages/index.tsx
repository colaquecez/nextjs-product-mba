import React, { useState } from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'
import { Button, Input } from '../components'
import * as yup from 'yup'
import { useAuth } from '../context/auth/auth.contetxt'
import api from '../service/api'
import { useSignInMutation } from '../redux/Auth/Auth.api'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [triggerSignIn] = useSignInMutation()

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
  })

  const loginHandle = async () => {
    const isValidated = await schema.isValid({ email, password })

    if (isValidated) {
      const response = await triggerSignIn({
        email,
        password
      })
      console.log(response)
    }
  }
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
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
        <Button onClick={loginHandle}>Entrar</Button>
      </Container>
    </>
  )
}

export default Home
