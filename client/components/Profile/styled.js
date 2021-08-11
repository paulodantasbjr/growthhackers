import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  .right-container {
    width: 3rem;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left-container {
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
  }
`
