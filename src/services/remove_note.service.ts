import Note from "@/models/Note"

const removeNote = async (id: string) => {
    await Note.findOneAndDelete({id})
}

export default removeNote
