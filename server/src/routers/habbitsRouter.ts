const express=require('express')
const habbitsRouter=express.Router()
const habbitsController= require('../controllers/habbitsController.ts')

habbitsRouter.route('/')
	.post(habbitsController.test)
    habbitsRouter.route('/changeHabbits')
	.post(habbitsController.changeHabbits)
	// habbitsRouter.route('/changeinput')
	// .post(habbitsController.changeInput)
	// habbitsRouter.route('/addnewhabbit')
	// .post(habbitsController.addNewHabbit)
	//addnewhabbit

export default habbitsRouter