const express=require('express')
const canvasImgBgRouter=express.Router()
const canvasImgBgController= require('../controllers/canvasImgBgController.ts')

canvasImgBgRouter.route('/')
	.post(canvasImgBgController.get);

    canvasImgBgRouter.route('/add')
	.post(canvasImgBgController.add)
    canvasImgBgRouter.route('/change')
	.post(canvasImgBgController.change)

export default canvasImgBgRouter