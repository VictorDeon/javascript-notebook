const express = require('express');
let router = express.Router()

class Message {
    constructor() {
        this.text = "Hello World!";
    }
}

router.get("/", (request, response) => {
    const message = new Message().text;
    response.send({
        hello: message
    })
});

module.exports = router;