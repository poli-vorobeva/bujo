const express=require('express')
const regRouter=express.Router()
const formRegController= require('../controllers/formRegController.ts')

regRouter.route('/')
	.post(formRegController.test)

export default regRouter