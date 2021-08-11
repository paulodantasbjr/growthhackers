import styled from 'styled-components'

export const LogoContainer = styled.div`
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 900;
    @media screen and (max-width: 520px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }
    span {
      font-size: 3rem;
      font-style: italic;
      font-weight: 900;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.primary};
      @media screen and (max-width: 520px) {
        font-size: 1.5rem;
        line-height: 2rem;
      }
    }
  }
`
