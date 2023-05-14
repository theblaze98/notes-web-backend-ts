import { JwtPayload, sign, verify } from 'jsonwebtoken'

interface JWT extends JwtPayload {
	id: string
}

const generateToken = (id: string, secret: string, options: {}) => {
	return sign({ id }, secret, options)
}

const descrypToken = (token: string, secret: string) => {
	const descrypt = verify(token, secret) as JWT
	return descrypt
}

export { generateToken, descrypToken }
