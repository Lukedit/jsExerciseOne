/*
<aside>
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números; ok
- [ ]  A subtração dos dois números; ok
- [ ]  A multiplicação dos dois números; ok
- [ ]  A divisão dos dois números; ok
- [ ]  O resto da divisão dos dois números; ok

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:

*/


let numberOne = prompt(`insira aqui o primeiro numero`)
let numberTwo = prompt(`insira aqui o segundo numero`)

let CheckEquals = numberOne === numberTwo ? 'são iguais' : 'são diferentes'

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


const sum = (numberOne + numberTwo)

let parOuImpar = sum % 2 == 0 ? 'par' : 'ímpar'

const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restoDiv = numberOne % numberTwo

alert(`os numeros ${CheckEquals}`)
alert(`a noma dos dois números é ${sum}`)
alert(`a soma dos números é ${parOuImpar}`)
alert(`a subtração dos dois números é ${sub}`)
alert(`a multiplicação dos dois números é ${mult}`)
alert(`a divisão dos dois números é ${div}`)
alert(`o resto da divisão dos dois numeros é ${restoDiv}`)


