const express=require('express')
const photosRouter=express.Router()
const formTestController= require('../controllers/formTestController.ts')

photosRouter.route('/')
	.post(formTestController.test)

export default photosRouter

// 	//  .get(imagesControllers.getImage)
// 	.post(translatesControllers.addTranslate)

// translatesRouter.route(`/:word`)
// 	.get(translatesControllers.getTranslate)
// // .patch(categoriesControllers.updateCategory)
// // .delete(categoriesControllers.deleteCategory)
// export default translatesRouter