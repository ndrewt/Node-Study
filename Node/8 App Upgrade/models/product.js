const { json } = require('body-parser')
const fs = require('fs')
const path = require('path')
const products = []

const p = path.join(path.dirname(process.mainModule.filename),
    'data',
    'products.json')

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        } else {
            cb(JSON.parse(fileContent))
        }

    })
}
module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title
        this.imageUrl = imageUrl
        this.price = price
        this.description = description
    }

    save() {
        getProductsFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fethchAll(cb) {
        getProductsFromFile(cb)

    }
}