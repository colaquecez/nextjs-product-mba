import React, { InputHTMLAttributes } from 'react'
import * as S from './Input.styles'

interface IInput extends InputHTMLAttributes<any> {
  label: string
}

const Input = ({ label, type, ...rest }: IInput) => {
  return (
    <S.Container>
      <p>{label}</p>
      <input {...(rest as InputHTMLAttributes<any>)} type={type} />
    </S.Container>
  )
}

export default Input
