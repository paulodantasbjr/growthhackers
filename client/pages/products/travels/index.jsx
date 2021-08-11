import { Search } from '@material-ui/icons/'
import { useContext } from 'react'

import { Layout } from '../../../styles/Layout'
import { getProductData } from '../../../utils/fetchData'
import { ProductCard } from '../../../components/ProductCard'
import { addToFavorite, RemoveToFavorite } from '../../../context/actions'
import { TravelContainer } from './styled'
import { DataContext } from '../../../context/globalState'

export default function Travel(props) {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state
  return (
    <Layout>
      <TravelContainer>
        <div className='input-container'>
          <input type='search' name='search' />
          <Search />
        </div>

        <div className='travel-container'>
          {props.travels.map((item) => {
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
