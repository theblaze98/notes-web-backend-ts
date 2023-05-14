import { z } from 'zod'

const loginSchema = z.object({
	email: z.string().nonempty('email should not be empty'),
	password: z.string().nonempty('password should not be empty')
})

export default loginSchema
