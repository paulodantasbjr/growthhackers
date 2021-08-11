import { useContext } from 'react'
import { Layout } from '../../styles/Layout'
import { FavoriteContainer } from './styled'
import { FavoriteCard } from '../../components/FavoriteCard'

import { DataContext } from '../../context/globalState'

export default function Favorites() {
  const { state } = useContext(DataContext)
  const { auth } = state

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
