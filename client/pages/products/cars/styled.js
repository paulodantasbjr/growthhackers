import styled from 'styled-components'

export const CarsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    @media screen and (max-width: 520px) {
      margin-bottom: 1rem;
    }
    input {
      background: ${({ theme }) => theme.colors.backgroundLight};
      width: 500px;
      height: 50px;
      font-size: 1rem;
      border-end-start-radius: 5px;
      border-start-start-radius: 5px;
      color: rgb(255, 255, 255);
      padding: 0.5rem 2rem;
      border: none;
      outline: 0;
      @media screen and (max-width: 520px) {
        width: 300px;
        height: 50px;
      }
    }
    svg {
      cursor: pointer;
      background: ${({ theme }) => theme.colors.backgroundLight};
      font-size: 3.1rem;
      border-end-end-radius: 5px;
      border-start-end-radius: 5px;
      padding: 0%.5rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        fill: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  .cars-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  }
`
