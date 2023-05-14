import removeNote from "@/services/remove_note.service";
import { Request, Response } from "express";

const removeNoteController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        await removeNote(id)

        res.status(201).json({msg: 'Note deleted'})
    } catch (error) {
        res.status(500).json({ msg: 'an error have ocurred' })
    }
}

export default removeNoteController
