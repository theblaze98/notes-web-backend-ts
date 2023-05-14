import { BadRequestError } from '@/errors'
import createUser from '@/services/create_user.service'
import getUser from '@/services/get_user.service'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

const registerController = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body
		const userDB = await getUser({ email })
		if (userDB) {
			throw new BadRequestError('email not avalaible')
		}

		const id = uuid()

	    await createUser({ id, username, email, password })

        res.status(201).json({msg: 'user created'})
	} catch (error) {
		if (error instanceof BadRequestError) {
			res.status(error.statusCode).json({ msg: error.message })
		}
	}
}

export default registerController
