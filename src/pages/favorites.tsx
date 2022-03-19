import Head from 'next/head'
import { Container, LoadingText } from '@/styles/pages/Home'
import { Card } from '@/components'
import { useGetAllFavoritesQuery } from '@/redux/Product/Product.api'

const Favorites: React.FC = () => {
  const { isFetching, data } = useGetAllFavoritesQuery()

  return (
    <>
      <Head>
        <title>Favoritos</title>
      </Head>
      {isFetching && <LoadingText>Carregando...</LoadingText>}

      <Container>
        {data?.products.length === 0 && (
          <LoadingText>
            Você não possui nenhum produto como favorito.
          </LoadingText>
        )}
        {data?.products?.map(({ name, price, favorite, _id }) => (
          <Card
            id={_id}
            name={name}
            price={price}
            key={name}
            favorite={favorite}
          />
        ))}
      </Container>
    </>
  )
}

export default Favorites
