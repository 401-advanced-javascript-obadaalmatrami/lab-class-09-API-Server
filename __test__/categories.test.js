'use strict';



const Categories = require('../src/models/categories/categories-model.js');

const categories = new Categories();

describe('Categories Model (Modular)', () => {

    it('can create() a new category', () => {
        let obj = { name: 'packbag' };
        categories.create(obj)
            .then(record => {
                Object.keys(obj).forEach(key => {
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });


    it('can get() a category', () => {
        let obj = { name: 'packbag' };
        categories.create(obj)
            .then(record => {
                categories.get(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can update() a category', () => {
        let obj = { name: 'packbag' };
        categories.create(obj)
            .then(record => {
                categories.update(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can get() all category', () => {
        let obj = { name: 'packbag' };
        categories.create(obj)
            .then(record => {
                categories.get(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

    it('can delete() a category', () => {
        let obj = { name: 'packbag' };
        categories.create(obj)
            .then(record => {
                categories.delete(record._id)
                    .then(category => {
                        Object.keys(obj).forEach(key => {
                            expect(category[key]).toEqual(obj[key]);
                        });
                    });
            });
    });

});