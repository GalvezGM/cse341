const express = require('express');
const router = express.Router();
const database = require('./data');
router.get('/', (req, res, next) => {
    res.render('pages/proveAssignments/prove02', {
        title: 'Prove 02',
        path: '/prove02', 
        activeTA04: true, 
        contentCSS: true, 
        book: books,
        pageTitle: 'View Products',
        hasBooks: books.length > 0
    });
});

const books = [];

router.get('/data/addProduct', (req, res, next) => {
    res.render('pages/proveAssignments/addProduct', {
        pageTitle: 'Add Product'
    })
});

router.post('/data/addProduct', (req, res, next) => {
    books.push({ title: req.body.title });
    books.push({ description: req.body.description });
    books.push({ price: req.body.price });
    books.push({ price: req.body.rating });
    
    res.redirect('/prove02/');
});

module.exports = router;