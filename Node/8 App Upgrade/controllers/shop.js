const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fethchAll(products => {
        res.render('Shop/product-list', {
            prods: products,
            Title: 'All Products',
            path: '/'
        })

    });
}

exports.getIndex = (req, res, next) => {
    Product.fethchAll(products => {
        res.render('shop/index', {
            prods: products,
            Title: 'Shop',
            path: '/'
        })

    });
}
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        Title: 'Your Cart',
        path: '/cart'
    })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        Title: 'Your Orders',
        path: '/orders'
    })
}
exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        Title: 'Checkout',
        path: '/checkout'
    })
}