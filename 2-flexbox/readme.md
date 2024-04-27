# Flexbox

## O que é Flexbox?

Flexbox é um modelo de layout que permite o design responsivo e a distribuição de itens em um container, mesmo quando o tamanho do container é desconhecido e/ou dinâmico.

## O que é um container e um item?

- Container: é o elemento que contém todos os itens.
- Item: é o elemento que está dentro do container.

## Como funciona o Flexbox?

O Flexbox trabalha com dois eixos: o eixo principal e o eixo secundário.

- Eixo principal: é o eixo que segue a direção do flex-direction.
- Eixo secundário: é o eixo que é perpendicular ao eixo principal.

## Brincar com o Flexbox

Podemos aprender no [Flexbox Froggy](https://flexboxfroggy.com/).

## Propriedades do container

- display: flex; // define o container como flexível
- flex-direction: row | row-reverse | column | column-reverse; // define a direção dos itens
- flex-wrap: nowrap | wrap | wrap-reverse; // define se os itens devem quebrar linha ou não
- flex-flow: <flex-direction> <flex-wrap>; // junção do flex-direction e flex-wrap
- justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly; // alinha os itens no eixo principal
- align-items: stretch | flex-start | flex-end | center | baseline; // alinha os itens no eixo secundário
- align-content: stretch | flex-start | flex-end | center | space-between | space-around; // alinha as linhas no eixo secundário

## Propriedades dos itens

- order: <integer>; // ordem dos itens
- flex-grow: <number>; // aumenta o tamanho do item proporcionalmente para ocupar o espaço disponível
- flex-shrink: <number>; // diminui o tamanho do item proporcionalmente para caber no espaço disponível
- flex-basis: <length> | auto; // largura inicial do item
- flex: <flex-grow> <flex-shrink> <flex-basis>; // junção do flex-grow, flex-shrink e flex-basis
- align-self: auto | flex-start | flex-end | center | baseline | stretch; // alinha o item

## Grid vs Flexbox

- Grid: é usado para layouts bidimensionais, ou seja, para criar layouts de linhas e colunas.
- Flexbox: é usado para layouts unidimensionais, ou seja, para criar layouts de linhas ou colunas.

## Guia completo do Flexbox

- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Vídeo sobre Flexbox

- [YouTube](https://www.youtube.com/watch?v=KbjLtEgmZ_E)
