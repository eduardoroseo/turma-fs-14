# Consumindo API com JavaScript

## O que é uma API?

API é a sigla para Application Programming Interface, que em português significa Interface de Programação de Aplicações. É um conjunto de regras e padrões que permite a comunicação entre sistemas.

## O que é uma requisição HTTP? Vamos relembrar...

Requisição HTTP é um pedido feito por um cliente a um servidor para obter ou enviar dados. Existem vários tipos de requisições HTTP, como GET, POST, PUT, DELETE, entre outras.

## API REST

API REST é um estilo de arquitetura de software que define um conjunto de regras e padrões para a criação de APIs. As APIs RESTful são baseadas no protocolo HTTP e utilizam os métodos GET, POST, PUT, DELETE, entre outros, para realizar operações em recursos.

## Que diacho é JSON? E onde ele entra nessa história?

JSON é a sigla para JavaScript Object Notation, que em português significa Notação de Objetos JavaScript. É um formato de dados muito utilizado para troca de informações entre sistemas. As APIs RESTful geralmente retornam dados no formato JSON.

## Consumindo uma API com JavaScript

Para consumir uma API com JavaScript, podemos utilizar a função `fetch`, que é nativa do navegador. A função `fetch` permite fazer requisições HTTP e obter os dados retornados pela API.

Vamos ver um exemplo de como consumir uma API de consultar o CEP:

```javascript
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Neste exemplo, estamos fazendo uma requisição GET para a API `https://viacep.com.br/ws/01001000/json/` e exibindo os dados retornados no console.

## Agora iremos criar uma API REST fake com o json-server

Mas antes, precisamos instalar o NodeJS com o NPM e o json-server.

## NodeJS

O Node.js é uma plataforma que permite executar JavaScript no servidor. Com o Node.js, podemos executar arquivos JavaScript no terminal do nosso computador, sem a necessidade de um navegador. Para instalar o Node.js, acesse o site oficial e faça o download do instalador.

- [Node.js](https://nodejs.org/)

## NPM (Node Package Manager)

O NPM é o gerenciador de pacotes do Node.js. Com o NPM, podemos instalar pacotes, bibliotecas e frameworks JavaScript. Para instalar um pacote com o NPM, basta executar o comando `npm install nome-do-pacote`.

## JsonPlaceholder API

O [JsonPlaceholder](https://jsonplaceholder.typicode.com/) é um serviço gratuito que fornece uma API RESTful para testes e prototipagem. Ele possui endpoints para usuários, posts, comentários, álbuns, fotos, todos, etc.

Ele também possui um método que você consegue rodar um servidor local com os dados que você deseja disponibilizar.

## Uma vez que temos o NodeJS e o NPM instalados, podemos criar a nossa própria API REST fake

Podemos criar a nossa própria API REST fake, fazendo o download do pacote `json-server`:

```bash
npm install -g json-server
```

E criar um arquivo `db.json` com os dados que queremos disponibilizar:

```json
{
  "usuarios": [
    { "id": 1, "nome": "John Doe" },
    { "id": 2, "nome": "Jane Doe" }
  ]
}
```

E rodar o servidor:

```bash
npx json-server db.json
```

O servidor estará disponível em `http://localhost:3000`.

Assim, podemos consumir a nossa API fake com JavaScript:

```javascript
fetch("http://localhost:3000/usuarios")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## Rotas

As APIs RESTful possuem rotas que representam os recursos disponíveis. Cada rota corresponde a um recurso e possui um método HTTP associado.

Por exemplo, a rota `/usuarios` pode corresponder ao recurso de usuários e possuir os métodos HTTP GET, POST, PUT e DELETE.

Baseado no exemplo acima, as rotas da API RESTful do JsonPlaceholder são:

```
GET    /usuarios
GET    /usuarios/:id
POST   /usuarios
PUT    /usuarios/:id
PATCH  /usuarios/:id
DELETE /usuarios/:id
```

## Exercícios

1. Consuma a API do viaCEP e exiba os dados do endereço no console.
2. Consuma a API do viaCEP e exiba no html os dados do endereço.
3. Consuma a API do jsonPlaceholder e exiba os dados dos usuários em uma tabela no html.
5. Consuma a sua API REST fake e exiba os dados dos usuários em uma tabela no html.
6. Consuma a sua API REST fake e adicione um novo usuário.
7. Consuma a sua API REST fake e atualize um usuário existente.
8. Consuma a sua API REST fake e exclua um usuário existente.
