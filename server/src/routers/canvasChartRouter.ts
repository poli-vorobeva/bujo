const express=require('express')
const canvasChartRouter=express.Router()
const canvasChartController= require('../controllers/canvasChartController.ts')

canvasChartRouter.route('/')
	.post(canvasChartController.test);

canvasChartRouter.route('/change')
	.post(canvasChartController.change)

export default canvasChartRouter