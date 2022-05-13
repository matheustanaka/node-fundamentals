import express from 'express'
import morgan from 'morgan'
import bp from 'body-parser'
/*
    urlencoded: Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
    json: Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
*/
const { urlencoded, json } = bp

// Define our local database, it means that we will save our data inside an array
const db = {
  todos: [],
}

// Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express()

app.use(urlencoded({ extended: true }))
app.use(json())
app.use(morgan('dev')) // middleware to gives more color for http status, like status 200 with a green color

// response json with the data that comes from db
app.get('/todo', (req, res) => {
  res.json({ data: db.todos })
})

// request for body text that we want to POST (create) a new To Do, complete will starts with false and the ID will get our date updated
app.post('/todo', (req, res) => {
  const newTodo = { 
      complete: false, 
      id: Date.now(), 
      text: req.body.text }
  //then push new to do model inside our database
  db.todos.push(newTodo)
  // and return the data with a new to do
  res.json({ data: newTodo })
})
// server is running on localhost with the port 8000
app.listen(8000, () => {
  console.log('Server on http://localhost:8000')
})