import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 350px;
  width: 350px;
  border-radius: 5px;
  position: relative;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  .card-img {
    height: 100px;
    width: 100px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: -25px;
      left: -25px;
      border-radius: 50%;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    }
  }
  h3 {
    position: absolute;
    top: 5%;
    left: 35%;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
  }
  .card-description {
    position: absolute;
    top: 35%;
    margin: 10px;
    text-align: center;
  }
  .card-actions {
    position: absolute;
    bottom: 10%;
    left: 20%;
  }
`
