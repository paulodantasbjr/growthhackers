import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 420px;
  width: 654px;
  border-radius: 7px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  @media screen and (max-width: 520px) {
    height: 300px;
    width: 100%;
  }
  .product-img {
    height: 420px;
    width: 327px;
    @media screen and (max-width: 520px) {
      display: none;
    }
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
    background: ${({ theme }) => theme.colors.backgroundLight};
    @media screen and (max-width: 520px) {
      height: 300px;
    }

    .product-description {
      height: 300px;
      width: 327px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media screen and (max-width: 520px) {
        height: 200px;
      }
      h2 {
        padding-top: 52px;
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.colors.primary};
      }
      h3 {
        margin-right: 45px;
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
      height: 100px;
      width: 327px;
      margin-top: 17px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`
