const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());


// GET endpoint to retrieve all users


// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World adfs');
});

// POST endpoint to add a new user with name check
app.post('/adduser', (req, res) => {
  const { name } = req.body;

  // Check if name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Check if the name already exists in the users array
  const existingUser = users.find((user) => user.name === name);
  if (existingUser) {
    return res.status(400).json({ error: 'User with this name already exists' });
  }

  // Create new user object
  const newUser = {
    id: users.length + 1,
    name,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Respond with the updated users list
  res.status(201).json({ message: 'User added successfully', users });
});

// PUT endpoint to update a user's name by ID
app.put('/updateuser/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  // Check if name is provided
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  // Find the user by ID
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Check if the new name already exists in other users
  const existingUser = users.find((user) => user.name.includes(name) );
  if (existingUser) {
    return res.status(400).json({ error: 'User with this name already exists' });
  }

  // Update user's name
  users[userIndex].name = name;

  // Respond with the updated user
  res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
});

// DELETE endpoint to delete a user by ID
app.delete('/deleteuser/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the user by ID
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Remove the user from the array
  users.splice(userIndex, 1);

  // Respond with the updated users list
  res.status(200).json({ message: 'User deleted successfully', users });
});

// Start the server
app.listen(3000, () => {
  console.log('server http://localhost:3000');
});

/*const fs=require('fs');
const path=require('path');
const http=require('http');
const users=require('./users');
console.log(users[0].name); 
console.log(getUser); 

/*http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'text/plane'});
    req.end('hello, world!');
   }).listen(3000);

const filePath=path.join(__dirname,'hello.txt')
console.log(filePath)

function createFile(){
    fs.writeFileSync('hello.txt','utf-8')
}
function readFile(){
    const data=fs.readFileSync('hello.txt','utf-8')
    console.log(data);
}
readFile();*/
