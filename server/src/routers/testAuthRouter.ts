const express=require('express')
const authRouter=express.Router()
const formAuthController= require('../controllers/formAuthController.ts')

authRouter.route('/')
	.post(formAuthController.test)

export default authRouter

// 	//  .get(imagesControllers.getImage)
// 	.post(translatesControllers.addTranslate)

// translatesRouter.route(`/:word`)
// 	.get(translatesControllers.getTranslate)
// // .patch(categoriesControllers.updateCategory)
// // .delete(categoriesControllers.deleteCategory)
// export default translatesRouter