import express from 'express'
import cors from 'cors';
import { getUsers, getSingleUser,registerUser, authenticateUser } from './database.js'


const app = express()
app.use(cors()); // Enable CORS
app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
    
        const { username, password, email, address, bio } = req.body
        const imagePath = '../snaprrama/src/components/images/default-snaprr.png';
        const registereduser = await registerUser(username, password, email, address, bio, imagePath)
        res.status(202).send(registereduser)
    })


app.post('/users/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Validate request body
      if (!username || !password) {
        console.error('Invalid request body:', req.body);
        return res.status(400).json({ message: 'Missing credentials' });
      }
  
      const user = await authenticateUser(username, password);
  
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Error during login:', error);
  
      // Log the error from the authenticateUser function
      if (error.name === 'AuthenticateUserError') {
        console.error('AuthenticateUser function error:', error.message);
      }
  
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.use((err, req, res, next) =>{

    console.error(err.stack)
    res.status(500).send('something is broken')
})

app.listen(8000, () =>{

    console.log('Server: 8000')

})