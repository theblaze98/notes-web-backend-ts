import { UnauthorizedError } from '@/errors'
import getUser from '@/services/get_user.service'
import { descrypToken } from '@/utils/token_utilities'
import { NextFunction, Request, Response } from 'express'
import { JsonWebTokenError } from 'jsonwebtoken'

interface ReqExtends extends Request {
	userId?: string
}

const isAuthenticatedMiddleware = async (
	req: ReqExtends,
	res: Response,
	next: NextFunction
) => {
	try {
		const token = req.headers.authorization?.split(' ').pop()

		if (!token) {
			throw new UnauthorizedError('user not authorized')
		}

		const { id } = descrypToken(`${token}`, `${process.env.MY_SECRET}`)

		const user = await getUser({ id })

		req.userId = user?.id

		next()
	} catch (error) {
		if (error instanceof UnauthorizedError) {
			return res.status(error.statusCode).json({ msg: error.message })
		}

		if (error instanceof JsonWebTokenError) {
			return res.status(401).json({ msg: error.message })
		}

		return res.status(500).json({ msg: 'an error have ocurred' })
	}
}

export default isAuthenticatedMiddleware
