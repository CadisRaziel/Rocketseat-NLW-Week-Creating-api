import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UsersRepository } from '../repositories/UsersRespository'
import * as yup from 'yup'
import { AppError } from '../errors/AppError'


class UserController {
    async create(request: Request, response: Response) {
        const { name, email } = request.body

        const schema = yup.object().shape({
            name: yup.string().required("Nome é obrigatório"),
            email: yup.string().email().required(),
        })

        //a duas formas de validar, a primeira: 
        // if(!(await schema.isValid(request.body))){
        //     return response.status(400).json({ 
        //         error: "Validation failed !"
        //     })
        // }

        //a segunda: (aqui a gente consegue ter um controle maior)
        try {
            await schema.validate(request.body, { abortEarly: false })
        } catch (err) {
            throw new AppError(err) 
        } 

        const usersRepository = getCustomRepository(UsersRepository)

        //SELECT * FROM users WHERE email = "EMAIL" (ele vai subistituir todo esse codigo por findOne)
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        //caso o email ja exista 
        if (userAlreadyExists) {
            throw new AppError("User already exists!")            
        }

        const user = usersRepository.create({
            name, email
        })

        await usersRepository.save(user)

        return response.status(201).json(user)
    }
}

export { UserController }
