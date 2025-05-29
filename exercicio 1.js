exercicio 1 
// Exercício 1 - Saudação por idioma
let idioma = prompt(&quot;Digite o idioma (pt, en, es):&quot;)
switch (idioma) {
case &quot;pt&quot;:
console.log(&quot;Olá!&quot;)
break;
case &quot;en&quot;:
console.log(&quot;Hello!&quot;)
break;
case &quot;es&quot;:
console.log(&quot;¡Hola!&quot;)
break;
default:
console.log(&quot;Idioma não suportado.&quot;)
}

// Exercício 2 - Dia da semana
let dia = prompt(&quot;Digite o número do dia da semana (1-7):&quot;)
switch (dia) {
case &quot;1&quot;:
console.log(&quot;Domingo&quot;)
break
case &quot;2&quot;:
console.log(&quot;Segunda-feira&quot;)
break
case &quot;3&quot;:
console.log(&quot;Terça-feira&quot;)

break;
case &quot;4&quot;:
console.log(&quot;Quarta-feira&quot;)
break;
case &quot;5&quot;:
console.log(&quot;Quinta-feira&quot;)
break;
case &quot;6&quot;:
console.log(&quot;Sexta-feira&quot;)
break;
case &quot;7&quot;:
console.log(&quot;Sábado&quot;)
break;
default:
console.log(&quot;Dia inválido.&quot;)
}
/*// Exercício 3 - transporte
let transporte = prompt(&quot;Digite o número dos diferentes tipos de
tranporte(1-4):&quot;)
switch (dia) {
case &quot;1&quot;:
console.log(&quot;carro&quot;)
break
case &quot;2&quot;:
console.log(&quot;bicicleta&quot;)
break
case &quot;3&quot;:
console.log(&quot;onibus&quot;)

break;
case &quot;4&quot;:
console.log(&quot;outros&quot;)
break;
default:
console.log(&quot;transporte não valido.&quot;)
}*/
// Exercício 4 - urgencia
let transporte = prompt(&quot;Digite o número dos diferentes tipos de
urgencia(1-3):&quot;)
switch (dia) {
case &quot;1&quot;:
console.log(&quot;baixa&quot;)
break
case &quot;2&quot;:
console.log(&quot;media&quot;)
break
case &quot;3&quot;:
console.log(&quot;alta&quot;)
break;
default:
console.log(&quot;Urgencia invalida.&quot;)
}
switch (transporte) {
case &quot;pt&quot;:
console.log(&quot;SUV&quot;)
break;
case &quot;en&quot;:

console.log(&quot;compacto&quot;)
break;
case &quot;es&quot;:
console.log(&quot;caminhão&quot;)
break;
default:
console.log(&quot;veiculo não encontrado.&quot;)

let tarifa = 2 // tarifa por tempo no estacionamento
switch(tarifa) {
case 1:
console.log(&quot;1 hora&quot;);
console.log(&quot;10 reais&quot;)
break;
case 2:
console.log(&quot;2 horas&quot;);
console.log(&quot;20 reais&quot;)
break;
case 3:
console.log(&quot;3 horas&quot;);
console.log(&quot;30 reais&quot;)
break;
default:
console.log(&quot;sua tarifa é de&quot;);
}

let jogo = prompt(&quot;digite seu nivel de dificuldade no jogo &quot;)

switch(jogo) {
case &quot;1&quot;:
console.log(&quot;facil&quot;);
break;
case &quot;2&quot;:
console.log(&quot;medio&quot;);
break;
case &quot;3&quot;:
console.log(&quot;dificil&quot;);
break;
default:
console.log(&quot;seu nivel de jogabilidade é&quot;);
}

let academia = 2 // seu plano vai ser
switch(academia) {
case 1:
console.log(&quot;musculaçao&quot;);
console.log(&quot;120,00 reais&quot;);
break;
case 2:
console.log(&quot;aulas de yoga&quot;);
console.log(&quot;90,00 reais&quot;);
break;
case 3:
console.log(&quot;aulas particulares com personal&quot;);
console.log(&quot;120,00 + 120,00&quot;)

break;
default:
console.log(&quot;seu plano é de&quot;);
}

let ingressos = 2 // seu ingresso passa como
switch(ingressos) {
case 1:
console.log(&quot;estudante&quot;);
console.log(&quot;25,00&quot;);
break;
case 2:
console.log(&quot;meia-entrada&quot;);
console.log(&quot;50,00 reais&quot;);
break;
case 3:
console.log(&quot;inteira&quot;);
console.log(&quot;100,00 reais&quot;)
break;
default:
console.log(&quot;o valor de seu ingresso sera&quot;);
}

let nivel= 2 // prompt(&quot;digite sua faixa etaria&quot;)
switch(nivel) {
case &quot;1&quot;:
console.log(&quot;10-14&quot;);

console.log(&quot;facil&quot;)
break;
case &quot;2&quot;:
console.log(&quot;14-17&quot;);
console.log(&quot;medio&quot;)
break;
case &quot;3&quot;:
console.log(&quot;17-25&quot;);
console.log(&quot;dicil&quot;)
break;
default:
console.log(&quot;sua faixa etaria é &quot;);
}
let musica = 2 // seu instrumento é
switch(musica) {
case 1:
console.log(&quot;rock&quot;);
console.log(&quot;guitarras&quot;);
break;
case 2:
console.log(&quot;pagode&quot;);
console.log(&quot;pandero&quot;);
break;
case 3:
console.log(&quot;classica&quot;);
console.log(&quot;piano&quot;)
break;

default:
console.log(&quot;seu instrumento sera&quot;);
}

let cursos = 2 // escolha se curso
switch(cursos) {
case 1:
console.log(&quot;curso de front-end&quot;);
console.log(&quot;300,00&quot;);
break;
case 2:
console.log(&quot;beck-end&quot;);
console.log(&quot;300,00&quot;);
break;
case 3:
console.log(&quot;mobile&quot;);
console.log(&quot;300,00 reais&quot;)
break;
default:
console.log(&quot;seu curso sera&quot;);

let habilidade = 10 // prompt(&quot;digite sua faixa etaria&quot;)
switch(habilidade) {
case &quot;1&quot;:
console.log(&quot;10-14&quot;);
console.log(&quot;atacante&quot;)

break;
case &quot;2&quot;:
console.log(&quot;14-17&quot;);
console.log(&quot;lateral&quot;)
break;
case &quot;3&quot;:
console.log(&quot;17-25&quot;);
console.log(&quot;defesa&quot;)
break;
default:
console.log(&quot;sua posicao no futebol é&quot;);

let exercicio = prompt(&quot;digite seu nivel na matematica&quot;)
switch(exercicio) {
case &quot;1&quot;:
console.log(&quot;facil&quot;);
break;
case &quot;2&quot;:
console.log(&quot;medio&quot;);
break;
case &quot;3&quot;:
console.log(&quot;dificil&quot;);
break;
default:
console.log(&quot;seu nivel é&quot;);