const express = require('express')
const router = express.Router()
const {getProjects,addProjects,updateProjects,deleteProjects, generateProjectStages} = require('../controllers/projectController')
const {protect} = require('../middleware/middleware')


router.route('/').get(protect,getProjects).post(protect,addProjects)
router.route('/:id').put(protect,updateProjects).delete(protect,deleteProjects)
router.route('/generate').post(protect,generateProjectStages)

module.exports = router 