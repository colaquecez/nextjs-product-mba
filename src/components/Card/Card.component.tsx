import React from 'react'
import { Button } from '@/components'
import Link from 'next/link'
import * as S from './Card.styles'

interface ICard {
  name: string
  favorite: boolean
  price: string
  key: string
  id: number | string
}
const Card = ({ name, price, key, favorite, id }: ICard) => {
  const formatFavoriteMessage = favorite
    ? 'Produto Favorito ♥'
    : 'Produto não é Favorito ♡'
  return (
    <S.Card key={key}>
      <h1>{name}</h1>
      <p>R$ {price}</p>
      <p className="favorite">{formatFavoriteMessage}</p>
      <Link passHref href={`/products/detail?id=${id}`}>
        <Button>Ver Detalhe</Button>
      </Link>
    </S.Card>
  )
}
export default Card
