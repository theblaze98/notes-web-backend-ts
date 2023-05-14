import NoteInterface from '@/interfaces/note.interface'
import Note from '@/models/Note'

const getNotes = async (createdBy?: string): Promise<NoteInterface[]> => {
	return await Note.find({ createdBy })
}

export default getNotes
