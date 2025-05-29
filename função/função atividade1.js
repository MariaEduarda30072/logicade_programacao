função

Função
let num1 = Number (prompt(&quot;digite um numero: &quot;))
let num2 = Number (prompt(&quot;Digite o segundo numero: &quot;))
let operacao = prompt(&quot;qual a operação? digite apenas simbolos: &quot;)
let resultado
function soma(num1,num2){
return resultado = num1 + num2
}
function subtracao(num1,num2){
return resultado = num1 - num2
}
function multiplicação(num1,num2){
resultado = num1 * num2
}
function divisao(num1,num2){
return resultado = num1 / num2

}
switch (operacao) {
case &quot;+&quot;:
resultado = soma(num1, num2)
break
case &quot;-&quot;:
resultado = subtracao(num1, num2)
break
case &quot;*&quot;:
resultado = multiplicacao(num1, num2)
break
case &quot;/&quot;:
resultado = divisao(num1, num2)

break
default:
resultado = &quot;Inválido&quot;
break
}
console.log(&quot;O resultado é:&quot;, resultado)