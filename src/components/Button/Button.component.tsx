import React, { ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

interface IButton extends ButtonHTMLAttributes<any> {
  children: React.ReactNode
}

const Button = ({ children, ...rest }: IButton) => {
  return (
    <S.Button {...(rest as ButtonHTMLAttributes<any>)}>{children}</S.Button>
  )
}
export default Button
