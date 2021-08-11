import React from 'react'

import { LinkButtonStyled } from './styled'

export const Button = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <LinkButtonStyled href={href} onClick={onClick} ref={ref}>
      Acessar
    </LinkButtonStyled>
  )
})
