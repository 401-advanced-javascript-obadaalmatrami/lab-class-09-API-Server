'use strict';

const Products = require('../src/models/products/products-model.js');
let products = new Products();


describe('Products Model (Modular)', () => {

    it('can create() a new product', () => {
        let obj = { name: 'iphonex', price: 250, quantity_in_stock: 10 };
        products.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });

    it('can get() a product', () => {
        let obj = { name: 'iphonex', price: 250, quantity_in_stock: 10 };
        products.create(obj)
            .then(record => {
                products.get(record._id)
                    .then(product => {
                        Object.keys(obj).forEach(key => {
                            expect(product[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can update() a product', () => {
        let obj = { name: 'iphonex', price: 250, quantity_in_stock: 10 };
        products.create(obj)
            .then(record => {
                products.get(record._id)
                    .then(product => {
                        console.log(product);
                        Object.keys(obj).forEach(key => {
                            expect(product[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can get() all product', () => {
        let obj = { name: 'iphonex', price: 250, quantity_in_stock: 10 };
        products.create(obj)
            .then(record => {
                products.update(record._id)
                    .then(product => {
                        Object.keys(obj).forEach(key => {
                            expect(product[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can delete() a product', () => {
        let obj = { name: 'iphonex', price: 250, quantity_in_stock: 10 };
        products.create(obj)
            .then(record => {
                products.delete(record._id)
                    .then(product => {
                        Object.keys(obj).forEach(key => {
                            expect(product[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

});