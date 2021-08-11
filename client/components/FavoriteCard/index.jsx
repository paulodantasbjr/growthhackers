import { CardContainer } from './styled'
import { Button } from '../Button'

export const FavoriteCard = ({ item }) => {
  console.log(item)
  return (
    <CardContainer>
      <>
        <div className='product-img'>
          <img src={item.image} alt={item.title} />
        </div>
        <div className='product-container'>
          <div className='product-description'>
            <h2>{item.title}</h2>
            <h3>Categoria: {item.category}</h3>
            <p>{item.description}</p>
          </div>
          <div className='product-action'>
            <Button>Desfavoritar</Button>
          </div>
        </div>
      </>
    </CardContainer>
  )
}
