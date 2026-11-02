const express = require('express');

const Profile = require('./Profile');

 const User = require('./User');

const Auth = require('./Auth');

const app = express();
  app.use(express.json());

app.post('/create-profile', async (req, res) => {
    try {
             const {name, email, qualification, skills, resume, photo} = req.body;
 if(!name || !email || !qualification || !skills || !resume || !photo) {
return res.status(400).json({message: 'all fields are required'});
        }
        res.status(201).json({message: 'profile created successfully',     
            timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
app.delete('/delete-profile', async (req, res) => {
    try {
    const {email} = req.body;
        if(!email) {
            return res.status(400).json({message: 'email is required'});
      }
        res.status(200).json({message: 'profile deleted successfully', 
            timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.post('/withdraw-application', async (req, res) => {
    try {
        const {email} = req.body;
    if(!email) {
             return res.status(400).json({message: 'email is required'});
        }
        res.status(200).json({message: 'application withdrawn successfully', 
            timestamp: new Date().toISOString()});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.listen(3000, () => {console.log('server running on port 3000')});