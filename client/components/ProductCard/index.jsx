import { CardContainer } from './styled'
import { IconButton } from '@material-ui/core/'
import { Favorite } from '@material-ui/icons/'

export const ProductCard = ({ item }) => {
  return (
    <CardContainer>
      <div className='card-img'>
        <img src={item.image} alt={item.title} />
      </div>
      <div className='card-body'>
        <h3>{item.title}</h3>
        <div className='card-description'>
          <p>{item.description}</p>
        </div>
        <div className='card-footer'>
          <span>
            Categoria: <p>{item.category}</p>
          </span>
          <IconButton>
            <Favorite />
          </IconButton>
        </div>
      </div>
    </CardContainer>
  )
}
