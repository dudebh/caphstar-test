const router = require('express').Router()
const Controller = require('../controllers/controller')

router.get('/api/aplikasi', Controller.getSosialMedia)
router.post('/api/aplikasi', Controller.postSosialMedia)
router.get('/api/aplikasi/:id', Controller.getSosialMediaById)
router.put('/api/aplikasi/:id', Controller.putSosialMedia)
router.delete('/api/aplikasi/:id', Controller.deleteSosialMedia)

module.exports = router