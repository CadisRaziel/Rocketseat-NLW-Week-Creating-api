import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; //tem que instalar yarn add express-async-errors
import createConnection from './database';
import { router } from './routers';
import { AppError } from './errors/AppError';

createConnection()
const app = express()

app.use(express.json()) 
app.use(router)

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        })
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`
    })
})

export { app }

/* Verbos mais usados !!
GET = Busca
POST = Salvar informação dentro da aplicação
PUT = Alterar alguma informação dentro da aplicação
DELETE = deletar alguma informação da aplicação
PATCH = Alterar algo especifico (imagem do usuario ou produto etc..)
*/
