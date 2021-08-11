import Link from 'next/link'

import { CardContainer } from './styled'
import { Button } from '../LinkButton'

export const Card = ({ title, img, description, href }) => {
  return (
    <CardContainer>
      <div className='card-img'>
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className='card-description'>{description}</div>
      <div className='card-actions'>
        <Link href={href} passHref>
          <Button />
        </Link>
      </div>
    </CardContainer>
  )
}
