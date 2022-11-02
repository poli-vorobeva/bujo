import {Request, Response} from "express";

exports.test=(req:Request,res:Response)=>{
	try{
		console.log('BODYY',req.body)
		res.status(201).json('blabal someData')
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}

// import {Request, Response} from "express";
// import Translate from "../models/translate";
// import Image from "../models/images";
//
// exports.addTranslate=async(req:Request,res:Response)=>{
// 	try{
// 		const newTranslate= await Translate.create(req.body)
// 		//const category= Category
// 		//await category.create
// 		res.status(201).json(newTranslate)
// 	}catch(err){
// 		res.status(400).json({
// 			status:'fail',
// 			message:err
// 		})
// 	}
// }
// exports.getTranslate=async(req:Request,res:Response)=>{
// 	console.log("REQPAR",req.params.word)
// 	try{
// 		const translate =await Translate.findOne({"word":req.params.word})
// 		console.log("$$$$$",req.params.word)
// 		console.log('####',translate)
// 		// res.write(res.json(), 'utf8', () => {
// 		//     console.log("Writing string Data...");
// 		// });
// 		// res.end(' ok');
// 		res.status(200).json({
// 			translate
// 		})
// 		return res
// 	}catch(err){
// 		res.status(400).json({
// 			status:'fail',
// 			message:err
// 		})
// 	}
// }
