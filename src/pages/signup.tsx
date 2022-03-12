import { useState } from 'react'
import * as yup from 'yup'
import Head from 'next/head'
import { Container, LabelError } from '@/styles/pages/SingUp'
import { Button, Input, Link } from '@/components'

import { useSignUpMutation } from '@/redux/Auth/Auth.api'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const Router = useRouter()
  const [triggerSignUp, { isError, error, isLoading }] = useSignUpMutation()

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    phone: yup.string().required()
  })

  const loginHandle = async () => {
    const isValidated = await schema.isValid({ email, password, name, phone })

    if (isValidated) {
      const data = await triggerSignUp({
        name,
        phone,
        email,
        password
      }).catch(() => {
        return null
      })

      if (!data.error) {
        Router.push('/signin')
      }
    }
  }
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Container>
        {isError && <LabelError>{error.data.message}</LabelError>}
        <Input
          onChange={event => setEmail(event.target.value)}
          type="text"
          value={email}
          label="Email"
        />
        <Input
          onChange={event => setName(event.target.value)}
          value={name}
          type="text"
          label="Nome"
        />
        <Input
          onChange={event => setPassword(event.target.value)}
          value={password}
          type="password"
          label="Senha"
        />
        <Input
          onChange={event => setPhone(event.target.value)}
          value={phone}
          type="text"
          label="Telefone"
        />
        <Button isLoading={isLoading} onClick={loginHandle}>
          Cadastrar
        </Button>
        <br />
        <Link href="/signin" label="Já possui uma conta?" />
      </Container>
    </>
  )
}

export default Home
