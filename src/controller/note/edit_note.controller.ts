import editNote from "@/services/edit_note.service";
import { Request, Response } from "express";

const editNoteController = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body
        const id = req.params.id

		await editNote({ id, title, description})

        res.status(201).json({msg: 'Note update'})
    } catch (error) {
        res.status(500).json({msg: 'an error have ocurred'})
    }
}

export default editNoteController
