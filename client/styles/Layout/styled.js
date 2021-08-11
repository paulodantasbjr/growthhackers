import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-around;
  align-items: center;
  .left-container {
    margin: 1rem;
  }
  .rigth-container {
    margin: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
`

export const MainContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  padding: 4rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
`

export const FooterContainer = styled.footer`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
  a {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    opacity: 0.8;
    transition: opacity 0.2s ease 0s;
    margin-left: 0.2rem;
    &:hover {
      opacity: 1;
    }
  }
`
