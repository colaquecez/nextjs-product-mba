import { ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

interface IButton extends ButtonHTMLAttributes<any> {
  children: React.ReactNode
  isLoading?: boolean
}

const Button = ({ children, isLoading, ...rest }: IButton) => {
  return (
    <S.Button {...(rest as ButtonHTMLAttributes<any>)}>
      {isLoading ? 'carregando...' : children}
    </S.Button>
  )
}
export default Button
