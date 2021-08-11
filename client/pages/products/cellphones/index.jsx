import { Search } from '@material-ui/icons/'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { CellPhoneContainer } from './styled'

export default function CellPhones(props) {
  return (
    <Layout>
      <CellPhoneContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='cellphone-container'>
          {props.cellphones.map((item) => {
            return <ProductCard key={item._id} item={item} />
          })}
        </div>
      </CellPhoneContainer>
    </Layout>
  )
}
export async function getServerSideProps({ query }) {
  const page = query.page || 1
  const sort = query.sort || ''

  const res = await getProductData(
    `products/cellphones?limit=${page * 6}&sort=${sort}`
  )

  // server side rendering
  return {
    props: {
      cellphones: res.productsCellPhone,
      result: res.result,
    },
  }
}
