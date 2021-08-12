import { IconButton } from '@material-ui/core/'
import { Favorite } from '@material-ui/icons/'

import { CardContainer } from './styled'

export const ProductCard = ({
  item,
  addToFavorite,
  RemoveToFavorite,
  dispatch,
  auth,
}) => {
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
          {auth.user && (
            <IconButton
              onClick={() => dispatch(addToFavorite(item, auth.user, dispatch))}
            >
              <Favorite />
            </IconButton>
          )}
        </div>
      </div>
    </CardContainer>
  )
}
