import UserInterface from '@/interfaces/user.interface'
import User from '@/models/User'

interface GetUserParams {
	id?: string
	email?: string
}

const getUser = async ({
	id,
	email,
}: GetUserParams): Promise<UserInterface | null> => {
	return await User.findOne({ $or: [{ id }, { email }] })
}

export default getUser
