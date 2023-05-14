import { Router } from 'express'
import authRoutes from '@/routes/v1/auth'
import notesRoutes from '@/routes/v1/notes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/notes', notesRoutes)

export default router
