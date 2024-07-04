import express from 'express'
import cors from 'cors';
import { getUsers, getSingleUserByUsername  ,registerUser, authenticateUser, PostCommission, addBio, showCommissions, getLoggedInUserId, AcceptCommission, searchUsers } from './database.js'


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

app.get('/search', async (req, res) => {
  console.log(req.query);
  try {
    const results = await searchUsers(req.query);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error searching for usernames' });
  }
});



app.get("/commissions", async (req, res) =>{

  const commissions = await showCommissions()
  res.send(commissions)

})

app.get("/usersearch/", async (req, res) => {
  const username = req.query.username;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  try {
    const users = await getUsersByUsername(username); 
    if (!users || users.length === 0) {
      return res.status(404).json({ error: 'Users not found' });
    }
    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post("/users/register", async (req, res) =>
    {
    
        const { username, password, bio, email,  } = req.body
        const registereduser = await registerUser(username, password, bio, email)
        res.status(202).send(registereduser)
    })

    app.post("/postcommission", async (req, res) => {
      const { username, title, content, potentialpayment, status } = req.body;
      const postcommission = await PostCommission(username, title, content, potentialpayment, status );
      res.status(202).send(postcommission);
    });

    app.put('/commissions/:commissionID', async (req, res) => {
      const { commissionID } = req.params;
      const { status, acceptedBy } = req.body;
    
      try {
        const result = await AcceptCommission(commissionID, status, acceptedBy);
        res.status(200).json({ message: 'Commission updated successfully' });
      } catch (error) {
        console.error('Error updating commission:', error);
        res.status(500).json({ message: 'Error updating commission' });
      }
    });

      let currentUser = null;

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
            currentUser = {
              username: user.username,
              email: user.email,
              bio: user.bio
            };
             // Store the username of the logged-in user
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
      
      // Example of a protected route that checks if a user is logged in
      app.get('/protected', async (req, res) => {
        if (currentUser) {
          res.json({
            username:currentUser.username,
            email: currentUser.email,
            bio: currentUser.bio });  
        } else {
          res.status(401).json({ message: 'Not authenticated' });
        }
      });

      app.post('/users/logout', (req, res) => {
        currentUser = null;
        res.status(200).json({ message: 'Logged out successfully' });
      });

      app.post('/calculateRating', async (req, res) => {
        try {
          const { category1, category2, category3 } = req.body;
      
          if (!req.session ||!req.session.scores) {
            req.session = {};
            req.session.scores = [];
          }
      
          // Calculate the weighted scores
          const score1 = category1 * 1.15;
          const score2 = category2 * 0.95;
          const score3 = category3 * 0.90;
      
          // Calculate the total score
          const totalScore = (score1 + score2 + score3) / 3;
      
          // Push the new score to req.session.scores
          req.session.scores.push({
            category1: score1,
            category2: score2,
            category3: score3,
            totalScore,
          });
      
          res.json({ totalScore, scores: req.session.scores });
        } catch (error) {
          console.error('Error calculating rating:', error);
          res.status(500).json({ error: 'Error calculating rating' });
        }
      });

      app.delete("/commissions/:id", async (req, res) => {
        const { id } = req.params;
        try {
          await deleteCommission(id);
          res.status(204).send();
        } catch (error) {
          res.status(500).json({ error: 'Failed to delete commission' });
        }
      });


app.use((err, req, res, next) =>{

    console.error(err.stack)
    res.status(500).send('something is broken')
})

app.listen(8000, () =>{

    console.log('Server: 8000')

})