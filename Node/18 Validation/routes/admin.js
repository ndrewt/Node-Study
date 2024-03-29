const path = require('path');

const {body} = require('express-validator/check')
const express = require('express');

const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product',[
    body('title','Title is not full')
    .isString()
    .isLength({min:3})
    .trim(),
    body('imageUrl','Please enter correct Url!').isURL().trim(),
    body('price','Price has not ".').isFloat(),
    body('description','Description is too short or long')
    .isLength({min:8,max:400})
    .trim()
], isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product',[
    body('title','Title is not full')
    .isString()
    .isLength({min:3})
    .trim(),
    body('imageUrl','Please enter correct Url!').isURL().trim(),
    body('price','Price has not ".').isFloat(),
    body('description','Description is too short or long')
    .isLength({min:8,max:400})
    .trim()
],  isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
