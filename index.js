import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/oi', (req, res) => {
  res.send('olá mundo')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})