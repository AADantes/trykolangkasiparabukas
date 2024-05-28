import express from 'express'
import { getUsers, getSingleUser,registerUser } from './database.js'

const app = express()

app.use(express.json())

app.get("/users", async (req, res) =>{

    const users = await getUsers() 
    res.send(users)

})

app.get("/users/:id", async (req, res) =>{

    const id = req.params.id
    const user = await getSingleUser(id) 
    res.send(user)

})

app.post("/users/register", async (req, res) =>
{

    const { username, password, email } = req.body
    const registereduser = await registerUser(username, password, email)
    res.status(202).send(registereduser)
})

app.use((err, req, res, next) =>{

    console.error(err.stack)
    res.status(500).send('something is broken')
})

app.listen(8080, () =>{

    console.log('Server: 8080')

})