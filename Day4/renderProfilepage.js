// Here is an example code for rendering profile page using EJS

// Folder structure:

// project/
//-server.js
//-views/
//-profile.ejs

// server.js :-

const express = require('express');
const app = express();

// Setup EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Route
app.get('/profile', (req, res) => {
  const user = {
    name: 'Arun',
    age: 22,
    email: 'arun@example.com',
    skills: ['Node.js', 'Express', 'MongoDB']
  };
  res.render('profile', { user });
});

app.listen(3000);

// views/profile.ejs:-

<!DOCTYPE html>
<html>
<head>
  <title>Profile Page</title>
</head>
<body>
  <h1>Profile of <%= user.name %></h1>
  <p>Age: <%= user.age %></p>
  <p>Email: <%= user.email %></p>

  <h3>Skills:</h3>
  <ul>
    <% user.skills.forEach(skill => { %>
      <li><%= skill %></li>
    <% }) %>
  </ul>
</body>
</html>