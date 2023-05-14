import UserInterface from '@/interfaces/user.interface'
import { hashingPassword } from '@/utils/password'
import User from '@/models/User'

const createUser = async ({
	id,
	username,
	email,
	password,
}: UserInterface) => {
	const hashPassword = await hashingPassword(password)

	const newUser = new User({
		id,
		username,
		email,
		password: hashPassword,
	})

	newUser.save()

	return newUser
}

export default createUser
