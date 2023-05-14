import NoteInterface from "@/interfaces/note.interface"
import Note from "@/models/Note"

const editNote = async ({id, title, description }: NoteInterface) => {
    await Note.findOneAndUpdate({id}, {title, description })
}

export default editNote
