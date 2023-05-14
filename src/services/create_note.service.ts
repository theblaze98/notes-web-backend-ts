import NoteInterface from '@/interfaces/note.interface'
import Note from '@/models/Note'

const createNote = async ({
	id,
	createdBy,
	title,
	description,
	createdAt,
	updateAt,
}: NoteInterface) => {
	const newNote = new Note({
		id,
		createdBy,
		title,
		description,
		createdAt,
		updateAt,
	})

	newNote.save()

	return newNote
}

export default createNote
