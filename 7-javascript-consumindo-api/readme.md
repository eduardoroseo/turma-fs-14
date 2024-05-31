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

Vamos ver um exemplo de como consumir uma API de usuários:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

Neste exemplo, estamos fazendo uma requisição GET para a API `https://jsonplaceholder.typicode.com/users` e exibindo os dados retornados no console.

## JsonPlaceholder API

O [JsonPlaceholder](https://jsonplaceholder.typicode.com/) é um serviço gratuito que fornece uma API RESTful para testes e prototipagem. Ele possui endpoints para usuários, posts, comentários, álbuns, fotos, todos, etc.

## Exercícios

1. Consuma a API do viaCEP e exiba os dados do endereço no console.
2. Consuma a API do viaCEP e exiba no html os dados do endereço.
3. Consuma a API do jsonPlaceholder e exiba os dados dos usuários em uma tabela no html.
