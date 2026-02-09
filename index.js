import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.get('/oi', (req, res) => {
  res.send('Olá, Mundo!')
})

const lista = [
  {
    name: 'Rick Sanchez',
    gender: 'male'
  }, 
  {
    name: 'Morty Smith',
    gender: 'male'
  }, 
  {
    name: 'Beth Sanchez',
    gender: 'female'
  }
]

app.get('/personagens', (req, res) => {
  res.send(lista)
})

app.get('/personagens/:id', (req, res) => {
  const id = req.params.id; //parâmetros vem com a requisição
  const personagem = lista[id-1]
  res.send(personagem)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})