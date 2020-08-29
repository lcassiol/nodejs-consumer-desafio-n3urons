# Consumer do [Desafio backend N3urons](https://github.com/lcassiol/nodejs-desafio-N3urons)

## ✨Objetivo

O objetivo do projeto é consumir uma fila do RabbitMQ em que o projeto principal realiza o envio simulando a chamada para um meio de pagamento, este projeto consome o dado e persiste no MongoDB em seguida retorna uma mensagem para uma nova fila com sucesso para que o projeto principal possa alterar o status do pedido para finalizado.

---------------------------------

:red_circle:  Antes de começar, tenha instalado em sua máquina o seguinte:
> No projeto foi utilizado o [yarn](https://yarnpkg.com/getting-started/install)
como gerenciador de pacotes,mas pode ser utilizado o npm.
- **[Git](https://git-scm.com)**
- **[Nodejs](https://nodejs.org/en/)**

## 🖥 Tecnologias
- [MongoDB](https://www.mongodb.com)
- [Mongoose](https://mongoosejs.com)
- [RabbitMQ](https://www.rabbitmq.com)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Express](https://github.com/expressjs/express)
- [Ts-Node](https://github.com/TypeStrong/ts-node)

:exclamation: É necessario ter o [RabbitMQ](https://www.rabbitmq.com) e o [MongoDB](https://www.mongodb.com) para que este projeto funcione corretamente. Eu recomendo a utilização do docker para facilitar este trabalho
  - RabbitMQ -- https://hub.docker.com/_/rabbitmq
  - MongoDB -- https://hub.docker.com/_/mongo
  
  
## ▶️ Para rodar o projeto:

 **1.** Dar o comando `yarn` no terminal na pasta do projeto para baixar as dependências<br />
 **2.** Rodar a aplicação `yarn dev:consumer` 
 
 
-------------------------------
## Projeto principal
https://github.com/lcassiol/nodejs-desafio-N3urons
