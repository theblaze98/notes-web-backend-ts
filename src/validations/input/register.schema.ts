import { z } from 'zod'

const registerSchema = z.object({
	username: z.string().nonempty('username should not be empty'),
	email: z.string().nonempty('email should not be empty'),
	password: z.string().nonempty('password should not be empty')
})

export default registerSchema
