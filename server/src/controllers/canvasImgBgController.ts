import {Request, Response} from "express";
import Model from "../model/model";

const model: Model = new Model();
exports.get = (req: Request, res: Response) => {

	try {
		console.log('bgImg', req.body.email);
		const userData = model.getImgBg(req.body.email,req.body.type);
		res.status(201).json({status: 'ok', data: userData})

	} catch (e) {
		res.status(400).json({
			status: 'fail',
			message: e
		})
	}
}
exports.add = (req: Request, res: Response) => {
	try {
       // console.log('addbgImg')
		const userData = model.addImgBg(req.body.data, req.body.type)
		res.status(201).json({status: 'ok', data: userData})

	} catch (e) {
		res.status(400).json({
			status: 'fail',
			message: e
		})
	}
}
// exports.changeImg = (req: Request, res: Response) => {
// 	try {
//         console.log('addbgImg')
// 		const userData = model.changeImgBg(req.body.data, req.body.type)
// 		res.status(201).json({status: 'ok', data: userData})

// 	} catch (e) {
// 		res.status(400).json({
// 			status: 'fail',
// 			message: e
// 		})
// 	}
// }
// exports.deleteImg = (req: Request, res: Response) => {
// 	try {
//         console.log('addbgImg')
// 		const userData = model.deleteImgBg(req.body.data, req.body.type)
// 		res.status(201).json({status: 'ok', data: userData})

// 	} catch (e) {
// 		res.status(400).json({
// 			status: 'fail',
// 			message: e
// 		})
// 	}
// }

// exports.changeBg = (req: Request, res: Response) => {
// 	try {
//         console.log('changebg')
// 		const userData = model.changeBg(req.body.data, req.body.type)
// 		res.status(201).json({status: 'ok', data: userData})

// 	} catch (e) {
// 		res.status(400).json({
// 			status: 'fail',
// 			message: e
// 		})
// 	}
// }
// exports.changeSetting= (req: Request, res: Response) => {
// 	try {
//         console.log('changebg')
// 		const userData = model.changeSetting(req.body.data, req.body.type)
// 		res.status(201).json({status: 'ok', data: userData})

// 	} catch (e) {
// 		res.status(400).json({
// 			status: 'fail',
// 			message: e
// 		})
// 	}
// }