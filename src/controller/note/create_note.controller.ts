import createNote from '@/services/create_note.service'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

interface ReqExtends extends Request {
	userId?: string
}

const createNoteController = async (req: ReqExtends, res: Response) => {
	try {
		const { title, description } = req.body
		const createdBy = req.userId

		const id = uuid()

		const newNote = await createNote({
			id,
			createdBy,
			title,
			description,
		})

		res.status(201).json({ newNote })
	} catch (error) {
		return res.status(500).json({ msg: 'an error have ocurred' })
	}
}

export default createNoteController
