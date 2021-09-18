const path = require('path');

const express = require('express');

const router = express.Router();

const books = [];

router.get('/data/addProduct', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addProduct.html'))
});

router.post('/data/addProduct', (req, res, next) => {
    books.push({ title: req.body.title });
    books.push({ description: req.body.description });
    books.push({ price: req.body.price });
    books.push({ rating: req.body.rating });
    res.redirect('/prove02/');
});

router.post('/addUser', (req, res, next) => {
    const newUser = req.body.newUser;
  
    userArray.push(newUser);
  
    res.redirect('/ta02/');
  });
  
  exports.routes = router;
exports.books = books;