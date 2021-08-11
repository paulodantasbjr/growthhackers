import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 420px;
  width: 654px;
  border-radius: 7px;
  box-shadow: 0px 14px 32px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  .product-img {
    height: 420px;
    width: 327px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 7px 0 0 7px;
    }
  }
  .product-container {
    width: 327px;
    border-radius: 0 7px 10px 7px;
    background: ${({ theme }) => theme.colors.background};
    .product-description {
      height: 300px;
      width: 327px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2 {
        padding-top: 52px;
        font-size: 34px;
        color: ${({ theme }) => theme.colors.primary};
      }
      h3 {
        margin: 0 0 47px 0;
        font-size: 13px;
        font-weight: 300;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.secondary};
        letter-spacing: 0.2em;
      }
      p {
        height: 125px;
        color: #8d8d8d;
        line-height: 1.7em;
        font-size: 15px;
        font-weight: 300;
        overflow: hidden;
        text-align: center;
        padding: 1rem;
      }
    }
    .product-action {
      height: 103px;
      width: 327px;
      margin-top: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
