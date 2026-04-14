const express = require('express')
const router = express.Router()
const {getProjects,addProjects,updateProjects,deleteProjects} = require('../controllers/projectController')


router.route('/').get(getProjects).post(addProjects)
router.route('/:id').put(updateProjects).delete(deleteProjects)


module.exports = router 