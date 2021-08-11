import { Search } from '@material-ui/icons/'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { TravelContainer } from './styled'

export default function Travel(props) {
  return (
    <Layout>
      <TravelContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='travel-container'>
          {props.travels.map((item) => {
            return <ProductCard key={item._id} item={item} />
          })}
        </div>
      </TravelContainer>
    </Layout>
  )
}
export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const sort = query.sort || ''

  const res = await getProductData(
    `products/travels?limit=${page * 6}&sort=${sort}`
  )

  // server side rendering
  return {
    props: {
      travels: res.productsTravel,
      result: res.result,
    },
  }
}
