import { LayoutContainer, HeaderContainer, MainContainer } from './styled'
import { Nav } from '../../components/Nav'
import { Profile } from '../../components/Profile'
import { Logo } from '../../components/Logo'

export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <div className='left-container'>
          <Logo />
        </div>

        <div className='rigth-container'>
          <Nav />
          <Profile />
        </div>
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  )
}
