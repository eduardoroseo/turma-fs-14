# Lógica de programação

## O que é?

Lógica de programação é a técnica de desenvolver algoritmos para solucionar problemas computacionais.
Ela é a base para o desenvolvimento de qualquer software, pois é a lógica que define como o software deve se comportar.

## O que são algoritmos?

Algoritmos são sequências de passos que devem ser seguidos para a resolução de um problema.
Eles são a base para a criação de programas de computador.

## Tem um gamezin para entender?

Sim! [Acesse aqui](https://rachacuca.com.br/jogos/missionarios-e-canibais/)

## Exemplos de algoritmos

### Algoritmo para fazer um bolo

1. Pegue os ingredientes
2. Misture os ingredientes
3. Coloque a mistura em uma forma
4. Leve ao forno
5. Espere 30 minutos
6. Tire do forno
7. Deixe esfriar
8. Sirva

### Algoritmo para fazer um sanduíche

1. Pegue os ingredientes
2. Monte o sanduíche
3. Sirva

### Algoritmo para trocar uma lâmpada

1. Desligue a energia
2. Pegue uma escada
3. Suba na escada
4. Retire a lâmpada queimada
5. Coloque a lâmpada nova
6. Desça da escada
7. Ligue a energia
8. Teste a lâmpada

## E onde se encaixa a linguagem de programação?

A linguagem de programação é a forma que utilizamos para escrever algoritmos. Ela é a ferramenta que utilizamos para transformar
nossas ideias em programas de computador. Existem várias linguagens de programação, cada uma com suas características e
finalidades.

## Qual linguagem de programação vamos aprender?

Vamos aprender JavaScript! Ela é uma linguagem de programação muito popular, utilizada para desenvolver aplicações web, aplicativos
móveis, jogos, entre outros.

## Estruturas de controle

As estruturas de controle são as formas que a lógica de programação utiliza para controlar o fluxo de execução de um programa.
As principais estruturas de controle são:

- Sequência
- Descisão
- Repetição

### Sequência

A sequência é a forma mais simples de estrutura de controle. Ela define que as instruções devem ser executadas em sequência,
uma após a outra.

```javascript
console.log("Passo 1");
console.log("Passo 2");
console.log("Passo 3");
```

### Decisão

A decisão é a estrutura de controle que permite que o programa tome decisões baseadas em condições.
Por exemplo, se o usuário digitou um número par, exiba "O número é par", senão, exiba "O número é ímpar".

```javascript
const numero = 10;

if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
```

### Repetição

A repetição é a estrutura de controle que permite que o programa repita um bloco de código várias vezes.
Por exemplo, exiba os números de 1 a 10.

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

## Como interagir com o usuário (entrada e saída)

Todo programa precisa interagir com o usuário. Isso é feito através de entradas e saídas.

### Entrada

A entrada é a forma como o usuário fornece informações para o programa.
Isso pode ser feito através de formulários, cliques em botões, etc.

### Saída

A saída é a forma como o programa exibe informações para o usuário.
Isso pode ser feito através de mensagens, gráficos, etc.

### Exemplos

#### Exemplo de entrada e saída em um programa de cálculo de média

```javascript
const nota1 = prompt("Digite a primeira nota");
const nota2 = prompt("Digite a segunda nota");
const nota3 = prompt("Digite a terceira nota");

const media = (nota1 + nota2 + nota3) / 3;

alert(`A média é ${media}`);
```

## Variáveis e Tipos de Dados

Variáveis são espaços de memória que armazenam informações.
Elas são utilizadas para guardar valores que serão utilizados pelo programa.

Os tipos de dados são as formas que o programa utiliza para representar informações.
Os principais tipos de dados são:

- Números
- Textos
- Booleanos

### Números

Os números são utilizados para representar valores numéricos.

```javascript
const numero = 10;
```

### Textos

Os textos são utilizados para representar sequências de caracteres.

```javascript
const texto = "Isso é um texto";
```

### Booleanos

Os booleanos são utilizados para representar valores lógicos.

```javascript
const verdadeiro = true;
const falso = false;
```

## Qual a diferença entre let, var e const?

- `let`: Utilizada para declarar variáveis que podem ter seu valor alterado.
- `var`: Utilizada para declarar variáveis que podem ter seu valor alterado. **Não é recomendada.**. Porque ela não respeita o escopo de bloco, mais para frente entenderemos melhor o que é isso.
- `const`: Utilizada para declarar variáveis que não podem ter seu valor alterado.

## Funções e Procedimentos

Funções e procedimentos são blocos de código que podem ser reutilizados em vários lugares do programa.

### Funções

As funções são blocos de código que podem receber parâmetros e retornar um valor.

```javascript
function somar(a, b) {
  return a + b;
}
```

### Procedimentos

Os procedimentos são blocos de código que podem receber parâmetros, mas não retornam um valor.

```javascript
function exibirMensagem(mensagem) {
  console.log(mensagem);
}
```

## O que é escopo?

Escopo é o contexto em que uma variável é acessível.
Existem dois tipos de escopo:

- Escopo global
- Escopo local

### Escopo global

Variáveis declaradas no escopo global são acessíveis em qualquer lugar do programa.

```javascript
const variavelGlobal = 10;

function funcao() {
  console.log(variavelGlobal);
}
```

### Escopo local

Variáveis declaradas no escopo local são acessíveis apenas dentro do bloco de código em que foram declaradas.

```javascript
function funcao() {
  const variavelLocal = 10;
  console.log(variavelLocal);
}
```

```javascript
function funcao() {
  const variavelLocal = 10;
  console.log(variavelLocal);
}

console.log(variavelLocal); // Erro! variavelLocal não está acessível aqui
```

## O que é um array?

Array é uma estrutura de dados que permite armazenar vários valores em uma única variável.

```javascript
const numeros = [1, 2, 3, 4, 5];
```

```javascript
const frutas = ["maçã", "banana", "laranja", "uva"];
```

## O que é um objeto?

Objeto é uma estrutura de dados que permite armazenar vários valores em uma única variável.
Cada valor é armazenado em uma propriedade do objeto.

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
};
```

## Prática

### Vite

Vamos utilizar o Vite para criar nossos projetos. O Vite é um bundler que nos permite criar projetos com JavaScript, TypeScript, React, Vue e Svelte. De modo geral, ele nos permite criar projetos modernos com uma configuração mínima.

Para criar um projeto com Vite, precisamos ter o Node.js instalado.
Se você não tem o Node.js instalado, [clique aqui](https://nodejs.org/) para baixar e instalar.
Dê preferência para a versão LTS.

Após instalar o Node.js, abra o terminal e execute o seguinte comando para instalar o Vite:

```bash
npm install -g vite
```

Após instalar o Vite, execute o seguinte comando para criar um novo projeto:

```bash
npm create vite@latest exercicios-logica
```

Escolha a opção `Vanilla` para criar um projeto com JavaScript puro.

Após criar o projeto, acesse a pasta do projeto e execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
cd exercicios-logica
npm run dev
```

Acesse o endereço `http://localhost:3000` no navegador para visualizar o projeto.

## Exercícios

1. Crie um programa que exiba a mensagem "Olá, mundo!" no console.
2. Faça um algoritmo que receba dois números e exiba o resultado da sua soma.
3. Faça um algoritmo que receba dois números e ao final mostre a soma, subtração, multiplicação e a divisão dos números lidos.
4. Escrever um algoritmo para determinar o consumo médio de um automóvel sendo fornecida a distância total percorrida pelo automóvel e o total de combustível gasto.
5. Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o seu nome, o salário fixo e salário no final do mês.
6. Escrever um algoritmo que leia o nome de um aluno e as notas das três provas que ele obteve no semestre. No final informar o nome do aluno e a sua média (aritmética).
7. Ler dois valores para as variáveis A e B, e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.
8. Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F=(9\*C+160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.
9. Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponíveis com o usuário.
10. A Loja Mamão com Açúcar está vendendo seus produtos em 5 (cinco) prestações sem juros. Faça um algoritmo que receba um valor de uma compra e mostre o valor das prestações.
11. Escrever um algoritmo que leia o nome e as três notas obtidas por um aluno durante o semestre. Calcular a sua média (aritmética), informar o nome e sua menção aprovado (media >= 7), Reprovado (media <= 5) e Recuperação (media entre 5.1 a 6.9).
12. Faça um algoritmo que receba o número do mês e mostre o mês correspondente. Valide mês inválido.
13. Faça um algoritmo que calcule o valor da conta de luz de uma pessoa. Sabe-se que o cálculo da conta de luz segue a tabela abaixo:
    Tipo de Cliente Valor do KW/h 1 (Residência) 0,60
    2 (Comércio) 0,48
    3 (Indústria) 1,29
    O algoritmo deve solicitar o tipo do cliente (1, 2 ou 3) e o consumo mensal em KW/h. Ao final, o algoritmo deve informar o valor a ser pago.
