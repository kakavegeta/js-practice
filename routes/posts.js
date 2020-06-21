const express = require('express')
const { checkLogin } = require('../middlewares/check')

const router = express.Router()

router.get('/', function(req, res, next){
    res.send('Home')
})

router.get('/create', checkLogin, function (req, res, next) {
    res.send('Publish')
})

router.get('/:postId', function(req, res, next) {
    res.send('Article')
})

router.get('/:postId/edit', checkLogin,function(req, res, next) {
    res.send('Update')
})

router.get('/:postId/delete', checkLogin, function(req, res, next) {
    res.send('Delete')
})

module.exports = router
