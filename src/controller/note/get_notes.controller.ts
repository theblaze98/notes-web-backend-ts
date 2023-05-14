import getNotes from '@/services/get_notes.service'
import { Request, Response } from 'express'

interface ReqExtends extends Request {
	userId?: string
}

const getNotesController = async (req: ReqExtends, res: Response) => {
	const createdBy = req.userId

	const notes = await getNotes(createdBy)

	res.json({ notes })
}

export default getNotesController
