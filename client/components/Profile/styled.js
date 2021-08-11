import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: 520px) {
    display: none;
  }
  .right-container {
    width: 3rem;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 300;
      span {
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 600;
        a {
          color: ${({ theme }) => theme.colors.primary};
          transition: all 0.4s ease-in-out;
          &:hover {
            color: ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`
