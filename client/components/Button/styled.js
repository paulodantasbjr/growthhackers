import styled from 'styled-components'

export const ButtonStyled = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  border: 0px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 1rem 3rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  &:hover {
    filter: brightness(0.7);
  }
`
