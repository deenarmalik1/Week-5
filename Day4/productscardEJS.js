// Here is the example code for Products card page using EJS :

// Folder Structure :

// project/
 //-app.js
 //-views/
   //-products.ejs


   // app.js :-

   const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/products', (req, res) => {
  const products = [
    { name: 'Nike Air Max', price: 7999, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff' },
    { name: 'Apple Watch', price: 24999, image: 'https://images.unsplash.com/photo-1555421689-3f034debb7a6' },
    { name: 'Headphone', price: 2999, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
    { name: 'Canon Camera', price: 45999, image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c' },
    { name: 'Backpack', price: 1999, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62' },
    { name: 'Sneakers', price: 4999, image: 'https://images.unsplash.com/photo-1603808033176-935819eb3d43' },
  ];

  res.render('products', { products });
});

app.listen(3000, () => console.log('Server on http://localhost:3000/products'));


// views/products.ejs :-

<!DOCTYPE html>
<html>
<head>
  <title>Products</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen p-6">

  <h1 class="text-3xl font-bold text-center mb-8">Our Products</h1>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    
    <% products.forEach(product => { %>
      <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
        <img src="<%= product.image %>" alt="<%= product.name %>" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-lg font-semibold"><%= product.name %></h2>
          <p class="text-gray-600 mt-1">₹<%= product.price %></p>
          <button class="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">Buy Now</button>
        </div>
      </div>
    <% }) %>

  </div>

</body>
</html>