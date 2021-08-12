import styled from 'styled-components'

export const LogoContainer = styled.div`
  @media screen and (max-width: 520px) {
    display: none;
  }
  h2 {
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 900;

    span {
      font-size: 3rem;
      font-style: italic;
      font-weight: 900;
      line-height: 3rem;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`
