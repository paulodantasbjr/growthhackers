<h1 align="center">
  Programming challenge GrowthHackers
</h1>
<p align="center">
  <h3 align="center">GrowthShop</h3>

  <p align="center">
    Projeto para a posição de desenvolvedor full stack
    <br />
    <a href="https://portfolio-paulodantasrj.vercel.app/"><strong>Portifolio Paulo Dantas »</strong></a>
    <br />
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Índice</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o projeto</a>
      <ul>
        <li><a href="#built-with">Feito com</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#installation">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#license">Licença</a></li>
    <li><a href="#contact">Contato</a></li>
    <li><a href="#todos">TODOS</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Projeto feito em dois dias para a aprocao da empresa [GrowthHackers](https://growthhackers.com/) para a vaga de dev. fullStack.

- Login e registro usando JWT para autenticação.
- Os itens são gerados via SSR
- Usando boas praticas de acessibilidade e codigo limpo.

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="Login Page" src="https://github.com/paulodantasrj/growthhackers/blob/main/client/public/assets/readme/login_page.PNG" width="300px" height="300px">

  <img alt="Register Page" src="hhttps://github.com/paulodantasrj/growthhackers/blob/main/client/public/assets/readme/register_page.PNG" width="300px" height="300px">

  <img alt="Product Page" src="https://github.com/paulodantasrj/growthhackers/blob/main/client/public/assets/readme/product_page.PNG" width="300px" height="300px">

  <img alt="Favorite Page" src="https://github.com/paulodantasrj/growthhackers/blob/main/client/public/assets/readme/favorite_page.PNG" width="300px" height="300px">

  <img alt="Home Page" src="https://github.com/paulodantasrj/growthhackers/blob/main/client/public/assets/readme/home_page.PNG" width="300px" height="300px">
</p>

### Built With

Projeto foi feito em:

- FrontEnd: [NextJS](https://nextjs.org/) e [StyledComponents](https://styled-components.com/)
- BackEnd: [NodeJS](https://nodejs.org/en/) e [ExpressJS](https://expressjs.com/)
- BancoDeDados: [MongoDB](https://www.mongodb.com/)

<!-- GETTING STARTED -->

## Getting Started

Instalar o [NodeJS](https://nodejs.org/en/) e o [Visual Studio Code](https://code.visualstudio.com/)

### Installation

1. Clone o repositorio
   ```sh
   git clone https://github.com/paulodantasrj/growthhackers.git
   ```
2. Instale as dependencias do client e do server
   ```sh
   npm install
   ```
3. Para configurar as variaveis de ambiente envie um email para paulorobertosjm@gmail.com ou crie a sua
   ```JS
   PORT = 'ENTER YOUR API';
   MONGODB_URL = 'ENTER YOUR API';
   ACCESS_TOKEN_SECRET = 'ENTER YOUR API';
   REFRESH_TOKEN_SECRET = 'ENTER YOUR API';
   ```

<!-- USAGE EXAMPLES -->

## Usage

### FrontEnd

- Possue uma area principal com com quatro tipos de API para consumir (CARRO, CASA, CELULAR, VIAGEM).
- Ao clicar em uma é direcionada para uma lista com os itens especificos de casa
- Pode-se favoritar o item.
- Somente é possivel favoritar se possuir registro.
- Possue uma tela de login e registro de usuario.
- Site totalmente responsivo

### BackEnd

- É possivel cadastrar novos produtos.
- Cada produto possui rota propria.
- Execute o servidor e acesse:
  ```sh
  http://localhost:5000/
  ```
- Rotas disponíveis:
  ```sh
  http://localhost:5000/products/create/car
  ```
  ```sh
  http://localhost:5000/products/create/house
  ```
  ```sh
  http://localhost:5000/products/create/cellphone
  ```
  ```sh
  http://localhost:5000/products/create/travel
  ```
  <!-- LICENSE -->

## License

Distribuído sob a licença MIT. Veja a `LICENÇA` para mais informações.

<!-- CONTACT -->

## Contact

Email - paulorobertosjm@gmail.com

Linkedin - [https://www.linkedin.com/in/paulodantasjr/](https://www.linkedin.com/in/paulodantasjr/)

Portifolio : [https://portfolio-paulodantasrj.vercel.app/](https://portfolio-paulodantasrj.vercel.app/)

<!-- TODOS -->

## Todos

- Testes usando JEST
- Implementar a função para não conseguir favoritar o mesmo item
- Implementar a função de remover o item do favorito
- Implementar no FrontEnd o input de busca (o Back End ja esta filtrando por nome e categoria e API)
