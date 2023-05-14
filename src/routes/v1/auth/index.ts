import loginController from '@/controller/auth/login.controller'
import registerController from '@/controller/auth/register.controller'
import { loginMiddleware, registerMiddleware } from '@/middlewares'
import { Router } from 'express'

const router = Router()

router.post('/register', registerMiddleware, registerController)
router.post('/login', loginMiddleware, loginController)

export default router
