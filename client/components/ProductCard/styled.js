import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 400px;
  width: 350px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  .card-img {
    width: 350px;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-body {
    width: 100%;
    height: 50%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    text-transform: uppercase;
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  .card-description {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      font-size: 1rem;
      line-height: 1rem;
      font-style: italic;
      font-weight: 300;
    }
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    span {
      display: flex;
      gap: 0.2rem;
      font-size: 1rem;
      line-height: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
    }
    p {
      font-size: 1rem;
      line-height: 1rem;
      font-style: italic;
      font-weight: 300;
    }
    svg {
      &:hover {
        fill: red;
      }
    }
  }
`
