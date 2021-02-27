import { app } from "./app"

app.listen(5000, () => console.log("Server is running"))

//observação tudo que estava aqui foi passado para o app.ts menos o app.listen
//para que podemos realizar nossos teste e que o servidor aqui criado 5000 não de conflito com os testes !!


/* Verbos mais usados !!
GET = Busca
POST = Salvar informação dentro da aplicação
PUT = Alterar alguma informação dentro da aplicação
DELETE = deletar alguma informação da aplicação
PATCH = Alterar algo especifico (imagem do usuario ou produto etc..)
*/
