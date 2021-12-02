//GET /students
//GET /student/:id
//POST /students
//PUT /students/:id
//DELETE /students/:id

const express = require('express')
const router = express.Router()
const selectionsCtrl = require('../controllers/selections')

router.get('/', selectionsCtrl.index)
router.post('/new', selectionsCtrl.create)
router.put('/:id', selectionsCtrl.update)
router.delete('/:id', selectionsCtrl.deleteOne)
//router.get('/new', selectionsCtrl.create)
//

module.exports = router