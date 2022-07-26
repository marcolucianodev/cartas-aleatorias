# Cartas Aleatórias

Tela de Inicial com solicitação do nome do usuário:
[![Preview Image](https://github.com/marcolucianodev/cartas-aleatorias/blob/master/public/screen-cartas-aleatorias1.png)](https://cartas-aleatorias.netlify.app/)

Tela principal com conteúdo das cartas:
[![Preview Image](https://github.com/marcolucianodev/cartas-aleatorias/blob/master/public/screen-cartas-aleatorias2.png)](https://cartas-aleatorias.netlify.app/)

[![Preview Image](https://github.com/marcolucianodev/cartas-aleatorias/blob/master/public/screen-cartas-aleatorias3.png)](https://cartas-aleatorias.netlify.app/)

Projeto proposto em um desafio, onde eu tive que desenvolver uma aplicação que consuma uma API externa pública, onde eu poderia escolher dentre uma listagem de APIs. Eu escolhi a API [Zoo Animal API](https://zoo-animal-api.herokuapp.com/), que retorna dados de animais diversos.

Esse projeto foi desenvolvido em React Js, Styled-Components, os Hooks useState, useEffect, useNavigate, useContext, Context API para gerenciar estados e React Router para as rotas.

Conforme proposto no desafio, eu desenvolvi uma página inicial que solicita que o usuário digite seu nome e clique em um botão para ser redirecionado á tela principal. Nessa tela principal o usuário visualiza seu nome digitado na tela anterior e visualiza 5 cartas que contém dados sobre diversos animais pelo mundo.

Em cada carta tem um valor aleatório de 0 á 10 definido como "Points", onde esse número é gerado através da função Math.random().

Também na tela principal existe dois botões, sendo um deles para adicionar mais cartas ao deck. Porém o usuário só pode adicionar mais três cartas aleatórias, sendo possível visualizar até oito cartas na tela. O outro botão tem a função de recarregar a tela com novas cartas aleatórias e permitindo o usuário refazer o processo de adicionar mais três cartas.

[Link do Projeto Online](https://cartas-aleatorias.netlify.app/)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Npm](https://www.npmjs.com/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone https://github.com/marcolucianodev/cartas-aleatorias.git

# Acesse a pasta do projeto no terminal/cmd
$ cd cartas-aleatorias

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```

### 🛠 Tecnologias

As seguintes tecnologias/ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Zoo Animal API](https://zoo-animal-api.herokuapp.com/)

