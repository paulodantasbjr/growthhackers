import { Search } from '@material-ui/icons/'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { HouseContainer } from './styled'

export default function House(props) {
  return (
    <Layout>
      <HouseContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='house-container'>
          {props.houses.map((item) => {
            return <ProductCard key={item._id} item={item} />
          })}
        </div>
      </HouseContainer>
    </Layout>
  )
}
export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const sort = query.sort || ''

  const res = await getProductData(
    `products/houses?limit=${page * 6}&sort=${sort}`
  )

  // server side rendering
  return {
    props: {
      houses: res.productsHouse,
      result: res.result,
    },
  }
}
