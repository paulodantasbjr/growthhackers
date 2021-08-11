import { Search } from '@material-ui/icons/'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { CarsContainer } from './styled'

export default function Cars(props) {
  return (
    <Layout>
      <CarsContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='cars-container'>
          {props.cars.map((item) => {
            return <ProductCard key={item._id} item={item} />
          })}
        </div>
      </CarsContainer>
    </Layout>
  )
}
export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const sort = query.sort || ''

  const res = await getProductData(
    `products/cars?limit=${page * 6}&sort=${sort}`
  )

  // server side rendering
  return {
    props: {
      cars: res.productsCar,
      result: res.result,
    },
  }
}
