import cors from 'cors'
import express from 'express'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.post('/api', async (req, res) => {
	const { email, name } = req.body

	if (!email || !name)
		return res.status(400).json({ message: 'Email and name are required' })
	try {
		const createdRow = await prisma.waitList.create({
			data: {
				email,
				name,
			},
		})
		res.json(createdRow)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: error })
	}
})

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
