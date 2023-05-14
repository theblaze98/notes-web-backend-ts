import loginSchema from "@/validations/input/login.schema";
import { NextFunction, Request, Response } from "express";
import { ZodError } from 'zod'

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        loginSchema.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            if (error instanceof ZodError) {
				return res.status(400).json({
					msg: error.issues[0].message,
					path: error.issues[0].path[0],
				})
			}
        }

        return res.status(500).json({msg: 'an error have ocurred'})
    }
}

export default loginMiddleware
