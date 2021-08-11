import styled from 'styled-components'

export const ListAppContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 520px) {
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem;
    @media screen and (max-width: 520px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      gap: 2rem;
    }
  }
`
