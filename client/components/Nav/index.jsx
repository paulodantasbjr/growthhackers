import Link from 'next/link'
import { useRouter } from 'next/router'

import { NavContainer } from './styled'

export const Nav = () => {
  const router = useRouter()

  return (
    <NavContainer>
      <ul>
        <li>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>Inicio</a>
          </Link>
        </li>

        <li>
          <Link href='/favorites'>
            <a className={router.pathname == '/favorites' ? 'active' : ''}>
              Favoritos
            </a>
          </Link>
        </li>
      </ul>
    </NavContainer>
  )
}
