import { useContext } from 'react'
import { Search } from '@material-ui/icons/'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { addToFavorite, RemoveToFavorite } from '../../../context/actions'
import { DataContext } from '../../../context/globalState'
import { CellPhoneContainer } from './styled'

export default function CellPhones(props) {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  return (
    <Layout>
      <CellPhoneContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='cellphone-container'>
          {props.cellphones.map((item) => {
            return (
              <ProductCard
                key={item._id}
                item={item}
                addToFavorite={addToFavorite}
                RemoveToFavorite={RemoveToFavorite}
                dispatch={dispatch}
                auth={auth}
              />
            )
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
