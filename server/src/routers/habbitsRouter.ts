const express=require('express')
const habbitsRouter=express.Router()
const habbitsController= require('../controllers/habbitsController.ts')

habbitsRouter.route('/')
	.post(habbitsController.test)
    habbitsRouter.route('/changeName')
	.post(habbitsController.changeName)
	habbitsRouter.route('/changeinput')
	.post(habbitsController.changeInput)
	//changeinput

export default habbitsRouter