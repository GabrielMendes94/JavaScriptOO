/*1. Faça um programa que leia o nome do aluno, três notas e mostre o nome e a
média(aritmética) do aluno.*/

const readline = require('readline-sync');
// const nome = readline.question("Digite seu nome: ");
// const nota1 = readline.questionFloat("Digite a primeira nota: ");
// const nota2 = readline.questionFloat("Digite a segunda nota: ");
// const nota3 = readline.questionFloat("Digite a terceira nota: ");
// const media = (nota1+nota2+nota3)/3;
// console.log(`${nome}, sua média foi ${media}`)

/*2. Faça um programa com Javascript para verificar se um determinado ano, fornecido
pelo usuário, é bissexto. Um ano é bissexto se for divisível por 400 ou se for divisível por
4 e não for divisível por 100.Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é
bissexto.*/

// const ano = readline.questionInt ("Digite o ano: ");
// if (ano%400==0 || ano%4==0 && ano%100!=0){
//     console.log(`${ano} é bissexto.`);
// }else{
//     console.log(`${ano} não é bissexto.`);
// }

/*3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada
estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ:
15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o
estado destino do produto e o programa retorne o preço final do produto acrescido do
imposto correspondente ao estado onde será vendido. O programa deve mostrar uma
mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.*/

// let valorProduto = readline.questionFloat ("Digite o valor do produto: ");
// let estado = readline.question("Digite o estado de destino: ");

// estado = estado.toUpperCase();

// if(estado=="MG"){
//     console.log(`Preço final: R$${valorProduto*1.07}`);

// }else if(estado=="SP"){
//     console.log(`Preço final: R$${valorProduto*1,12}`);

// }else if(estado=="RJ"){
//     console.log(`Preço final: R$${valorProduto*1,15}`);

// }else if(estado=="MS"){
//     console.log(`Preço final: R$${valorProduto*1.08}`);

// }else{
//     console.log("Estado inválido");
// }

/*4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
Faça três versões desse programa, cada uma usando uma estrutura de repetição
diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
programa? Por que?*/

// let x = 0, soma = 0;
// for (let i = 0; i < 50; i++) {
//     soma += x;
//     x += 2;
// }
// console.log(soma);

// let i=0, x=0, soma=0;
// while (n<50) {
//     soma+=x;
//     x+=2;
//     i++
// }
// console.log(soma);

// let i=0, x=0, soma=0
// do {
//     soma+=x;
//     x+=2;
//     i++;
// } while (i<50);
// console.log(soma);


/*5. Faça um programa em Javascript que receba do usuário um número N e depois
imprima os N primeiros números naturais ímpares.*/

// const num = readline.questionInt("Digite um número: ");
// let x=1;
// for (let i = 1; i <= num; i++) {
//     console.log(x);
//     x+=2;
// }

/*6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
taxas devidas.*/

// const diasTrabalhados = readline.questionInt("Digite o número de dias trabalhados: ");

// let valorPago = diasTrabalhados*30*0.92;
// console.log(`Valor líquido a ser pago: R$${valorPago}`);


/*7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
em segundos, de uma experiência biológica. O programa deve informar o horário
(hora:minuto:segundo) de término da mesma.*/

// let horario = readline.question("Digite o horário de início (HH:MM:SS):");
// let duracao = readline.questionInt("Digite a duração da experiência em segundos: ");

// let horarioArray = horario.split(':');
// console.log(horarioArray);