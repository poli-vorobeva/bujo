const express=require('express')
const canvasImgBgRouter=express.Router()
const canvasImgBgController= require('../controllers/canvasImgBgController.ts')

canvasImgBgRouter.route('/')
	.post(canvasImgBgController.get);

    canvasImgBgRouter.route('/add')
	.post(canvasImgBgController.add)
    canvasImgBgRouter.route('/change')
	.post(canvasImgBgController.changeImg)
	canvasImgBgRouter.route('/changebg')
	.post(canvasImgBgController.changeBg)
	canvasImgBgRouter.route('/delete')
	.post(canvasImgBgController.deleteImg)
	canvasImgBgRouter.route('/setting')
	.post(canvasImgBgController.changeSetting)

export default canvasImgBgRouter