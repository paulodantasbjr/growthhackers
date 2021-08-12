import styled from 'styled-components'

export const NavContainer = styled.nav`
  @media screen and (max-width: 520px) {
    position: absolute;
    top: 25px;
    left: 10px;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    li {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 600;
      text-transform: uppercase;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 520px) {
        font-size: 0.8rem;
        line-height: 1rem;
        font-weight: 400;
      }
      .active {
        color: ${({ theme }) => theme.colors.primary};
      }
      a {
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }
`
