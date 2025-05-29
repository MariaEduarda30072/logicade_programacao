função 2

Função 2
let user = prompt(&quot;Digite o user:&quot;);
let password = prompt(&quot;Digite a senha:&quot;);
let mensagem;

function validacao(user, password) {
switch (user) {
case &quot;Baby&quot;:
switch (password) {
case &quot;3007&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Ana&quot;:
switch (password) {
case &quot;123&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Joao&quot;:
switch (password) {
case &quot;abc&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Lucas&quot;:
switch (password) {
case &quot;senha1&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}

break;
case &quot;Maria&quot;:
switch (password) {
case &quot;m123&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Pedro&quot;:
switch (password) {
case &quot;p321&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Julia&quot;:
switch (password) {
case &quot;j000&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Rafa&quot;:
switch (password) {
case &quot;r999&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
case &quot;Sofia&quot;:
switch (password) {
case &quot;sof123&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;

case &quot;Leo&quot;:
switch (password) {
case &quot;leo321&quot;: mensagem = &quot;Login realizado com sucesso&quot;; break;
default: mensagem = &quot;Senha incorreta&quot;; break;
}
break;
default:
mensagem = &quot;Usuário não encontrado&quot;;
}
}

validacao(user, password);
console.log(mensagem);