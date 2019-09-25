import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// 01 escopo de variavel global
var animal = "cat";

// 02 escopo de variavel local
function sayAnimal() {
  var cachorro = "buldog";
  console.log(cachorro);
}
sayAnimal();

//03 var
var city = "rj";
console.log(city);

//04 variavel com o mesmo nome
var city = "niteroi";
console.log(city);

//05 criando variavel  com let
let cidade = "niteroi";
console.log(cidade);

//06 - const - "criar constante"
const valor = 20;
console.log(valor);

//07 const = tentando retribuir o valor
//const valor = 50;
console.log(valor);

//08 const + object
//obs const nao e valor imutavel
const george = {
  name: "Bezerra",
  age: 100
};
console.log(george);

//alterando o valor de idade
george.age = 46;

//tornando o object imutavel
Object.freeze(george);

//tipos de dados
let a = 1; //inteiro
let b = 3.14; //float - ponto flutuante
let c = "caracteres"; //string
console.log(a);
console.log(b);
console.log(c);

let d = Boolean(true); //booleano

if (d) {
  console.log(d);
}

//concatenação de string
const rio = {
  live: "RJ",
  love: "Arraial do Cabo"
};

// - antes do ES6
const text =
  "Eu moro em " + rio.live + " e sou apaixonado por " + rio.love + "!";
console.log(text);

//ii - ES6 - Template literal - back trick
const newtext = `eu moro em ${rio.live}e sou apaixonado por${rio.love}!`;
console.log(newtext);

//iii - variaveis em que desejo pular linhas
//antes do ES6
const fruits = "banana" + "\n" + "orange" + "\n" + "apple";

//com ES6
const newfruits = `banana
orange
apple`;
console.log(newfruits);
