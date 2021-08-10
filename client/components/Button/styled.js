import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 0px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 1rem 3rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`
