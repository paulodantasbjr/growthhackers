import styled from 'styled-components'

export const SignInContainer = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }
  form {
    width: 100%;
    max-width: 480px;
    background: ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 5px;
    padding: 3rem;

    display: flex;
    flex-direction: column;
  }
  section {
    background: ${({ theme }) => theme.colors.backgroundLight};
    display: grid;
    grid-auto-flow: row;
    gap: 10px;
    margin-bottom: 1rem;
    div {
      display: flex;
      align-items: center;
      border: 2px solid ${({ theme }) => theme.colors.backgroundLight};
      border-radius: 5px;
      padding: 0.5rem;
    }
  }
  input {
    width: 100%;
    height: 50px;
    font-size: 16px;
    background: ${({ theme }) => theme.colors.background};
    color: rgb(255, 255, 255);
    padding: 0.5rem;
    border: none;
    outline: 0;
  }
  .form-link {
    margin-top: 1rem;
    text-align: center;
    p {
      font-size: 1rem;
      font-weight: 600;
      background: ${({ theme }) => theme.colors.backgroundLight};
      color: ${({ theme }) => theme.colors.white};
    }
    a {
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      opacity: 0.8;
      transition: opacity 0.2s ease 0s;
      margin-left: 0.2rem;
      background: ${({ theme }) => theme.colors.backgroundLight};
      &:hover {
        opacity: 1;
      }
    }
  }
`
