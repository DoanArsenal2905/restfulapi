const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true })
    .then(() => console.log('Connected to database...'))
    .catch(err => console.log(err))

// Middleware
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

// Controller
const UserController = require('./controllers/UserController')

// Routes
app.post('/api/user/create', UserController.create)
app.post('/api/user/update', UserController.update)
app.get('/api/user/retrieve', UserController.retrieve)
app.delete('/api/user/delete', UserController.delete)

// Start Server
app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on port: ${port}...`)
})