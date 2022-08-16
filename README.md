## Javascript Notebook

Tutorial de nodejs

Instale o [jupyterlab](https://jupyter.org/install)

```sh
sudo pip3 install jupyterlab
jupyter-lab
```

## Memory Heap

```js
// Engine aponte essa variável number para uma regiao da memória (memory heap) para armazenar esse número
const number = 610;
```

**Memory heap** é apenas um local na memória para nós armazenar nossas informações.

## Call Stack

```js
function subtractTwo(num) {
    return num - 2;
}

function calculate() {
    const numTotal = 4 + 5;
    return subtractTwo(numTotal);
}

calculate();
```

**Call Stack** é uma região da memória na qual armazena as informações no formato de pilha e vai executando ela em ordem e removendo da pilha. Primeiro a entrar é o último a sair. Exemplo: file.js (anonymous) -> calculate -> subtractTwo -> calculate -> anonymous

## Stack Overflow

O que acontece se tivermos uma stack infinita, ou seja, uma função que chama ela mesma recursivamente.

```js
function inception() {
    inception();
}

// Uncaught RangeError: Maximum call stack size exceeded
```

## Garbage Collection

Assim que você armazena algo no memory heap, por exemplo, uma função e você saiu dela e não precisa mais das informações alocadas,
o garbage collection trata de remover esse lixo. Isso previne o que chamamos de **memory leaks**.

Apesar dele funcionar de forma automatica, não tenha a falsa ilusão de que você não precise gerenciar o uso da sua memória.
O garbage collector usar uma algoritmo chamado **mark and sweep**.

```js
var human = {
    firstName: 'Victor',
    lastName: 'Deon'
}

var human = 10;
// os valores do objeto human ainda está na memória e virou lixo e será removido pelo garbage collection
```

Qualquer variável que tiver dentro de uma função vira lixo quando a função termina de executar.

## Memory Leaks

Vamos fazer um estouro de memória, ou seja, vamos inserir infinitamente dados no memory heap.

```js
let array = [];
for (let i = 5; i > 1; i++) {
    console.log(`Loop infinito ${i}`);
    array.push(i-1);
}
```

Memory leaks comuns:

1) Muitas varíaveis globais

```js
var a = 1;
var b = 2;
var c = 3;
...
```

2) Não remover os Event Listeners

```js
var element = document.getElementById('button');
element.addEventLister('click', () => console.log("ENTREI"))
```

Por exemplo em um single page application você entrar e sair de uma página muitas vezes sem remover os event listeners dela
vai só acumulando e estoura a memória.

3) Uso do setInterval sem para-lo.

Esse roda infinitamente se não for parado.

```js
setIntervalo(() => console.log("rodando!!!"))
```

## Single Thread

Javascript é single thread, ou seja, somente um conjunto de código é executado por vez. Com isso tem apenas um Call Stack.
Por causa disso, javascript é sincrono, o que torna custoso rodar tarefas muito lentas ou grandes.

Porém não é utilizado apenas o javascript, temos o javascript runtime que torna-o assincrono. Ou seja, o browser roda em background, enquanto
que o código js está rodando e ele usa o Web API que vem com o browser por debaixo dos panos. O Browser tem sua própria implementação do engine que
tem várias funções como requisições http, manipulação de DOM, cache, database e etc.

Você consegue ver as funções do Web API executando o comando no console do browser `window`. O browser utiliza o C++ para realizar algumas operações,
e essas Web APIs são assincronas, ou seja, elas são executadas em background e retornadas apenas quando tiver prontas e a call stack vazia, ele te da apenas um callback para você ficar observando se já está pronta, se estiver pronta e sua call stack estiver vazia o js pode executa-la. Não paralisando a execução das funções javascript.

```js
console.log("1"); // Call Stack executa
setTimeout(() => console.log("2"), 1000);  // Enviado para a web api tratar
console.log("3"); // Call Stack executa
// 1
// 3
// 2 (web api - retorna para o call stack executar)
```

## Nodejs

É um javascrip runtime, ou seja, ele atua como o web API de forma async, porém fora do browser usando o C++. Funciona de forma muito simular ao
runtime do browser, porém faz muita mais coisas do que o browser como acessar seus arquivos e etc. Ou seja, ele é a soma do browser runtime com a
engine do javascript V8, porém sem acesso as funcionalidades do browser como o `window` ao inves dele tem o `global`.

![q](https://user-images.githubusercontent.com/14116020/183785596-113beeff-3420-4e02-8a69-8b910b84e0d4.png)