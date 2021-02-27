import { getCustomRepository } from "typeorm"
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository"
import { Request, Response } from 'express'
import { AppError } from "../errors/AppError"


class AnswersController {
    async execute(request: Request, response: Response) {
        const { value } = request.params
        const { u } = request.query

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        })

        //veriifca se existe o usuario 
        if(!surveyUser) {
            throw new AppError("Survey user does not exists!")                      
        }

        surveyUser.value = Number(value)

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)
    }
}


export { AnswersController }



// http://localhost:5000/answers/10?u=6fd86c62-97d5-4d45-8fca-a96c86ab4517
/*
Route Params => Parametros que compoe a rota /:
routes.get("/answers/:value)

Query Params => busca, paginação, (não obrigatórios)
ele vem depois do ?
composição: chave(u) = valor(6fd86c62-97d5-4d45-8fca-a96c86ab4517)


*/