import createNoteController from '@/controller/note/create_note.controller'
import editNoteController from '@/controller/note/edit_note.controller'
import getNotesController from '@/controller/note/get_notes.controller'
import removeNoteController from '@/controller/note/remove_note.controller'
import isAuthenticatedMiddleware from '@/middlewares/is_authenticated.middleware'
import { Router } from 'express'

const router = Router()

router.post('/add', isAuthenticatedMiddleware, createNoteController)
router.get('/get', isAuthenticatedMiddleware, getNotesController)
router.put('/edit/:id', isAuthenticatedMiddleware, editNoteController)
router.delete('/remove/:id', isAuthenticatedMiddleware, removeNoteController)

export default router
