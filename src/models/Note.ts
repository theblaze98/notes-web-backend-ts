import NoteInterface from '@/interfaces/note.interface'
import { Schema, model } from 'mongoose'


const NoteSchema = new Schema<NoteInterface>(
	{
		id: {
			type: String,
			required: true,
		},
		createdBy: {
			type: String,
			required: true,
            ref: 'user'
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{ timestamps: true }
)

export default model('note', NoteSchema)
