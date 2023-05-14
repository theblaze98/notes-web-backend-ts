import { NotFoundError, UnauthorizedError } from '@/errors'
import getUser from '@/services/get_user.service'
import { comaparePassword } from '@/utils/password'
import { generateToken } from '@/utils/token_utilities'
import { Request, Response } from 'express'

const loginController = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body
		const userDB = await getUser({ email })
		if (!userDB) {
			throw new NotFoundError('user is not registered')
		}

		if (!(await comaparePassword(password, userDB.password))) {
			throw new UnauthorizedError('invalid credentials')
		}

		const token = generateToken(userDB.id, `${process.env.MY_SECRET}`, {
			expiresIn: '7d',
		})

		res.status(200).json({ msg: 'authorized', token })
	} catch (error) {
		if (error instanceof NotFoundError) {
			return res.status(error.statusCode).json({ msg: error.message })
		}
		if (error instanceof UnauthorizedError) {
			return res.status(error.statusCode).json({ msg: error.message })
		}

		return res.status(500).json({ msg: 'an error have ocurred' })
	}
}

export default loginController
