import Link from 'next/link'

import {
  LayoutContainer,
  HeaderContainer,
  MainContainer,
  FooterContainer,
} from './styled'
import { Nav } from '../../components/Nav'
import { Profile } from '../../components/Profile'
import { Logo } from '../../components/Logo'
import { useContext } from 'react'
import { DataContext } from '../../context/globalState'

export const Layout = ({ children }) => {
  const { state, dispatch } = useContext(DataContext)
  const { auth } = state
  return (
    <LayoutContainer>
      <HeaderContainer>
        <div className='left-container'>
          <Logo />
        </div>

        <div className='rigth-container'>
          <Nav auth={auth} />
          <Profile auth={auth} dispatch={dispatch} />
        </div>
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
      <FooterContainer>
        <span>
          @Copy -
          <Link href='https://portfolio-paulodantasrj.vercel.app/'>
            <a>Paulo Dantas</a>
          </Link>
        </span>
      </FooterContainer>
    </LayoutContainer>
  )
}
