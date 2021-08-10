import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100vh;
`

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
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
  height: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 0 auto;
`
