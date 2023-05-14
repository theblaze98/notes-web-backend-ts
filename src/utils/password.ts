import { compare, hash } from "bcryptjs"

const hashingPassword = async (password: string) => {
    return await hash(password, 8)
}

const comaparePassword =async (password: string, hashPassword: string) => {
    return await compare(password, hashPassword)
}

export { hashingPassword, comaparePassword }
