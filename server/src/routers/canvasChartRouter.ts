const express=require('express')
const canvasChartRouter=express.Router()
const canvasChartController= require('../controllers/canvasChartController.ts')

canvasChartRouter.route('/')
	.post(canvasChartController.test)

export default canvasChartRouter