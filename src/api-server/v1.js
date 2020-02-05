'use strict';

const express = require('express');


const router = express.Router();


router.get('/api/v1/models', (req, res) => {
    modelFinder.list()
        .then(models => response.status(200).json(models));
});

router.get('/api/v1/:model/schema', (req, res) => {
    res.status(200).json(req.model.jsonSchema());
});


router.get('/api/v1/:model', getAll);

router.post('/api/v1/:model', postarecord);


router.get('/api/v1/:model/:id', getoneresult);

router.put('/api/v1/:model/:id', putarecord);


router.delete('/api/v1/:model/:id', deletehandler);


function getAll(req, res, next) {
    req.model.get()
        .then(data => {
            const output = {
                count: data.length,
                results: data,
            };
            res.status(200).json(output);
        })
        .catch(next);
}

function getoneresult(req, res, next) {
    req.model.get(req.params.id)
        .then(result => res.status(200).json(result[0]))
        .catch(next);
}

function postarecord(req, res, next) {
    req.model.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(next);
}

function putarecord(req, res, next) {
    req.model.update(req.params.id, req.body)
        .then(result => res.status(200).json(result))
        .catch(next);
}

function deletehandler(req, res, next) {
    req.model.delete(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(next);
}

module.exports = router;