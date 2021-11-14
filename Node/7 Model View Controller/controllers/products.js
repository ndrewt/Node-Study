const Product = require('../models/product')
exports.getAddProduct = (req, res, next) => {
    res.render('add-product.pug', {
        Title: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productsCss: true,
        acticeADDProduct: true
    })
}
exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/');
}
exports.getProducts = (req, res, next) => {
    Product.fethchAll(products => {
        res.render('Shop', {
            prods: products,
            Title: 'Shop',
            path: '/'
        })

    });
}