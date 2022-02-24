import React, { useState } from 'react'
import * as yup from 'yup'
import Head from 'next/head'
import { Container, LabelError } from '../styles/pages/Home'
import { Button, Input } from '../components'
import api from '../service/api'

const Home: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState('')

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    name: yup.string().required(),
    phone: yup.string().required()
  })

  const loginHandle = async () => {
    try {
      const isValidated = await schema.isValid({ email, password, name, phone })
      console.log(isValidated)
      if (isValidated) {
        const response = await api.put('/storeProducts/signup', {
          name,
          phone,
          email,
          password
        })
        console.log(response)
        return
      }
      setError('Preencha todos os campos')
      setIsError(true)
    } catch (e) {
      setError(e.response.data.message)
      setIsError(true)
    }
  }
  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>
      <Container>
        {isError && <LabelError>{error}</LabelError>}
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
        <Button onClick={loginHandle}>Cadastrar</Button>
      </Container>
    </>
  )
}

export default Home
