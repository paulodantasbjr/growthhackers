import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  .card-img {
    height: 150px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-body {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 1rem;
    .card-title {
      h3 {
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    .card-description {
      p {
        line-height: 1.2rem;
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        text-align: justify;
      }
    }
    .card-actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      a {
        font-size: 1rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        color: ${({ theme }) => theme.colors.secondary};
        transition: all 0.4s ease-in-out;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          text-decoration: underline;
        }
      }
    }
  }
`
