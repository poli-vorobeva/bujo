const express=require('express')
const photosRouter=express.Router()
const photosController= require('../controllers/photosController.ts')
photosRouter.route('/')
	.post(photosController.test)

export default photosRouter

// 	//  .get(imagesControllers.getImage)
// 	.post(translatesControllers.addTranslate)

// translatesRouter.route(`/:word`)
// 	.get(translatesControllers.getTranslate)
// // .patch(categoriesControllers.updateCategory)
// // .delete(categoriesControllers.deleteCategory)
// export default translatesRouter