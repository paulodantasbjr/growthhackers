import { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

import { Layout } from '../../styles/Layout'
import { FavoriteContainer } from './styled'
import { FavoriteCard } from '../../components/FavoriteCard'
import { DataContext } from '../../context/globalState'
import { getData } from '../../utils/fetchData'

export default function Favorites() {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  useEffect(() => {
    const token = Cookies.get('refreshtoken')
    if (token) {
      dispatch({ type: 'NOTIFY', payload: { loading: true } })
      const fetchData = async () => {
        const res = await getData('user/refresh_token', token)
        dispatch({
          type: 'AUTH',
          payload: {
            user: res.user,
          },
        })
        dispatch({ type: 'NOTIFY', payload: {} })
        if (res.err) {
          localStorage.removeItem('firstLogin')
          dispatch({ type: 'NOTIFY', payload: { error: err.msg } })
          Cookies.remove('refreshtoken')
        }
      }
      fetchData()
    }
  }, [])

  return (
    <Layout>
      <FavoriteContainer>
        {auth.user?.favorites.map((item, i) => {
          return <FavoriteCard key={i} item={item} />
        })}
      </FavoriteContainer>
    </Layout>
  )
}
