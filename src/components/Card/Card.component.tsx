import React from 'react'
import { Button } from '@/components'
import * as S from './Card.styles'

interface ICard {
  name: string
  favorite: boolean
  price: string
  key: string
}
const Card = ({ name, price, key, favorite }: ICard) => {
  const formatFavoriteMessage = favorite
    ? 'Produto Favorito ♥'
    : 'Produto não é Favorito ♡'
  return (
    <S.Card key={key}>
      <h1>{name}</h1>
      <p>R$ {price}</p>
      <p className="favorite">{formatFavoriteMessage}</p>
      <Button>Ver detalhes</Button>
    </S.Card>
  )
}
export default Card
