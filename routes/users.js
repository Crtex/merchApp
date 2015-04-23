var express = require('express');
var oAuth = require('oauthio');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource1');
});
router.get('/register/twitter', oAuth.auth('twitter', 'https://merchnode.localtunnel.me/users/register-complete'));
router.get('/register/vk', oAuth.auth('vk', 'https://merchnode.localtunnel.me/users/register-complete'));
router.get('/register-complete', function(req, res, next){
    res.send('YAY!');
});

module.exports = router;
