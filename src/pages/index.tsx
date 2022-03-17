import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Container, Navigation, LoadingText } from '@/styles/pages/Home'
import { Card } from '@/components'
import { useGetAllQuery } from '@/redux/Product/Product.api'
import { useDispatch, useSelector } from 'react-redux'
import { locationAction } from '@/redux/Auth/Auth.slice'

const Home: React.FC = () => {
  const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const { isFetching, data } = useGetAllQuery({
    orderDirection: 'asc',
    page,
    perPage: 5
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(locationAction(position))
      })
    }
  }, [])

  const handleNextPost = () => {
    setPage(state => state + 1)
  }

  const { userLocation } = useSelector(state => state.auth)

  const handlePreviousPost = () => {
    setPage(state => state - 1)
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      {isFetching && <LoadingText>Carregando...</LoadingText>}

      <Container>
        {data?.products?.map(({ name, price, favorite, _id }) => (
          <Card
            name={name}
            price={price}
            key={name}
            favorite={favorite}
            id={_id}
          />
        ))}
      </Container>

      <Navigation>
        <button
          type="button"
          onClick={handleNextPost}
          disabled={data?.products?.length < 5}
        >
          Próximo
        </button>
        <button
          type="button"
          onClick={handlePreviousPost}
          disabled={data?.page <= 1}
        >
          Anterior
        </button>
      </Navigation>
    </>
  )
}

export default Home
