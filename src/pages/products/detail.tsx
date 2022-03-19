import { Button } from '@/components'
import {
  useManageFavoriteMutation,
  useStoreProductsQuery
} from '@/redux/Product/Product.api'
import { useRouter } from 'next/router'
import * as S from '../../styles/pages/Detail'

const Detail = () => {
  const { query } = useRouter()
  const { data, isFetching } = useStoreProductsQuery({ id: query.id })
  const [triggerManageFavorite, { isLoading }] = useManageFavoriteMutation()

  const manageFavorite = async () => {
    await triggerManageFavorite({ productID: query.id })
  }

  if (isFetching || isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <S.Container>
      <S.SubContainer>
        <h1>{data.product.name}</h1>
        <p>R$: {data.product.price}</p>

        <Button onClick={manageFavorite}>
          {data.product.favorite
            ? 'Remover como Favorito'
            : 'Adicionar como favorito'}
        </Button>
      </S.SubContainer>
    </S.Container>
  )
}

export default Detail
