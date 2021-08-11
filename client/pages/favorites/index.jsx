import { Layout } from '../../styles/Layout'
import { FavoriteContainer } from './styled'
import { FavoriteCard } from '../../components/FavoriteCard'

export default function Favorites() {
  return (
    <Layout>
      <FavoriteContainer>
        <FavoriteCard />
        <FavoriteCard />
      </FavoriteContainer>
    </Layout>
  )
}
