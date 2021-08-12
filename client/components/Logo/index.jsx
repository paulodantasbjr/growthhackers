import Link from 'next/link'

import { LogoContainer } from './styled'

export const Logo = () => {
  return (
    <LogoContainer>
      <Link href='/'>
        <a>
          <h2>
            Growth<span>Shop</span>
          </h2>
        </a>
      </Link>
    </LogoContainer>
  )
}
