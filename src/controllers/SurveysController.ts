import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { SurveysRepository } from '../repositories/SurveysRepository'

class SurveysController {
    async create(request: Request, response: Response) {
        const { title, description } = request.body

        const surveysRepository = getCustomRepository(SurveysRepository)
        
        const survey = surveysRepository.create({
            title,
            description
        })
        
        await surveysRepository.save(survey)
        
        return response.status(201).json(survey) //201 = create(nunca esquecer de por .json(), se nao no insonia nao aparece o verbo)
    }
    
    async show(request: Request, response: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository)

        const all = await surveysRepository.find()

        return response.json(all)

    }
}

export { SurveysController }