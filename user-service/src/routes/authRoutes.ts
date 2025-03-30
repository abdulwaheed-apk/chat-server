import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const userRouter = Router()

userRouter.post('/register', async (req, res) => {
    await AuthController.register(req, res)
})
userRouter.post('/login', async (req, res) => {
    await AuthController.login(req, res)
})

export default userRouter
