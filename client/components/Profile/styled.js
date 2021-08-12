import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: 520px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .right-container {
    width: 3rem;
    height: 3rem;
    @media screen and (max-width: 520px) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .left-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 520px) {
      flex-direction: row;
      margin: 0;
      width: 200px;
      justify-content: space-evenly;
    }
    p {
      font-size: 1rem;
      line-height: 2rem;
      font-weight: 300;
      @media screen and (max-width: 520px) {
        font-size: 0.8rem;
        line-height: 1rem;
      }
      span {
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 600;
        @media screen and (max-width: 520px) {
          font-size: 0.8rem;
          line-height: 1rem;
          font-weight: 400;
        }
      }
    }
    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.primary};
      @media screen and (max-width: 520px) {
        font-size: 0.8rem;
      }
      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`
