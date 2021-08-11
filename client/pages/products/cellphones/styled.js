import styled from 'styled-components'

export const CellPhoneContainer = styled.div`
  width: 100%;
  height: 100%;
  .input-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
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
  .cellphone-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
  }
`
