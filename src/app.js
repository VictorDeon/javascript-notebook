const express = require('express');
let router = express.Router()

router.get("/", (request, response) => {
    response.send({
        hello: "Hello World!"
    })
});

module.exports = router;