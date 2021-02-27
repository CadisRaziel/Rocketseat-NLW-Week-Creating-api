import { Router } from 'express'
import { RepositoryNotTreeError } from 'typeorm'
import { AnswersController } from './controllers/AnswersController'
import { SendMailController } from './controllers/SendMailController'
import { SurveysController } from './controllers/SurveysController'
import { UserController} from './controllers/UserController'
import { Npscontroller} from './controllers/Npscontroller'

const router = Router()

const userController = new UserController()
const surveysController = new SurveysController()
const sendMailController = new SendMailController()
const answerController = new AnswersController()
const npscontroller = new Npscontroller()



router.post("/users", userController.create)
router.post("/surveys", surveysController.create)

router.get("/surveys", surveysController.show)

router.post("/sendMail", sendMailController.execute)
router.get("/answers/:value", answerController.execute)
router.get("/nps/:survey_id", npscontroller.execute)



export { router }