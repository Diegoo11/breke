var express = require('express');
var router = express.Router();
const messages = [
  {
    text:  "Hi there!",
    user: "Diegoo",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
