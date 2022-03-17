import { useStoreProductsQuery } from '@/redux/Product/Product.api'
import { useRouter } from 'next/router'

const Detail = () => {
  const { query } = useRouter()
  const { data, isFetching } = useStoreProductsQuery({ id: query.id })

  if (isFetching) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <h1>{data.product.name}</h1>
      <p>{data.product.price}</p>
    </>
  )
}

export default Detail
