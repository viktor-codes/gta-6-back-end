import express from 'express'
const app = express()
const PORT = 5000

app.get('/api', (req, res) => {
	res.send('Hello World!')
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
