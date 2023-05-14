import registerSchema from '@/validations/input/register.schema'
import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'

const registerMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		registerSchema.parse(req.body)
		next()
	} catch (error) {
		if (error instanceof ZodError) {
			return res
				.status(400)
				.json({
					msg: error.issues[0].message,
					path: error.issues[0].path[0],
				})
		}

		return res.status(500).json({ msg: 'an error have ocurred' })
	}
}

export default registerMiddleware
