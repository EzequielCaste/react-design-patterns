import express from 'express'

const app = express()

app.use(express.json())

let currentUser = {
  id: '789',
  name: 'John Doe',
  age: 54,
  hairColor: "brown",
  hobbies: ['swimming', 'video games'],
}

let users = [{
  id: '123',
  name: 'John Doe',
  age: 54,
  hairColor: "brown",
  hobbies: ['swimming', 'video games'],
}, {
  id: '234',
  name: 'Jane Doe',
  age: 38,
  hairColor: 'blonde',
  hobbies: ['music', 'swimming', 'cooking'],
},
{
  id: '456',
  name: 'River Slate',
  age: 42,
  hairColor: 'black',
  hobbies: ['reading', 'hunting'],
},]

const products = [
  {
    id: '1234',
    name: 'Smart TV',
    price: '$400',
    description: 'Huge LCD screen a great deal',
    rating: 4.5,
  },
  {
    id: '2345',
    name: 'Mobile phone',
    price: '$500',
    description: 'Phone with mp3 and calculator',
    rating: 5,
  },
  {
    id: '3456',
    name: 'Running Shoes',
    price: '$120',
    description: 'Just like the pros use',
    rating: 4.2,
  },
]

app.get('/api/current-user', (req, res) => {
  res.json(currentUser)
})

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params

  res.json(users.find(user => user.id === id))
})

app.post('/users/:id', (req, res) => {
  const { id } = req.params
  const {user: updatedUser }= req.body

  users = users.map(user => user.id === id ? updatedUser : user)

  res.json(users.find(user => user.id === id))
})

app.get('/users', (req, res) => {
  res.json(users)
})

app.get('/api/products/:id', (req, res) => {
  const { id } = req.params
  res.json(products.find(product => product.id === id))
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.listen(8080, () => {
  console.log("Server is listening on port 8080")
})