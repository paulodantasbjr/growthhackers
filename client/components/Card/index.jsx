import Link from 'next/link'

import { CardContainer } from './styled'

export const Card = ({ title, img, description, href }) => {
  return (
    <CardContainer>
      <div className='card-img'>
        <img src={img} alt={title} />
      </div>
      <div className='card-body'>
        <div className='card-title'>
          <h3>{title}</h3>
        </div>
        <div className='card-description'>
          <p>{description}</p>
        </div>
        <div className='card-actions'>
          <Link href={href} passHref>
            <a>entrar</a>
          </Link>
        </div>
      </div>
    </CardContainer>
  )
}
