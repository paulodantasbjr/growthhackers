import { CardContainer } from './styled'
import { Button } from '../Button'
import { useContext } from 'react'
import { DataContext } from '../../context/globalState'

export const FavoriteCard = () => {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state

  return (
    <CardContainer>
      <div className='product-img'>
        <img
          src='https://images.unsplash.com/photo-1573495612937-f01934eeaaa7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt=''
        />
      </div>
      <div className='product-container'>
        <div className='product-description'>
          <h2>Lorem Ipsum</h2>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div className='product-action'>
          <Button>Desfavoritar</Button>
        </div>
      </div>
    </CardContainer>
  )
}
