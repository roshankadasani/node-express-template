var express = require('express');
var router = express.Router();

// GET api version.
router.get('/', function(req, res, next) {
    let apiVersion = {
        "app": "hello-world",
        "version": "1.0.0",
        "paths": [
            "/healthz"
        ]
    }
    res.send(apiVersion);
    next();
});

// GET health of the app.
router.get('/healthz', function(req, res, next) {
    let apiVersion = {
        "status": "OK"
    }
    res.send(apiVersion);
    next();
});

module.exports = router;