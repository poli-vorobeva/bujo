import {Request, Response} from "express";
import Model from "../model/model";

const model:Model = new Model();
exports.test=(req:Request,res:Response)=>{		
	try{
	    console.log('habbitServer',req.body.email);
        const userData = model.getHabbits(req.body.email);
        res.status(201).json({status:'ok', data: userData})
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}
exports.changeHabbits=(req:Request,res:Response)=>{
	try{
		const userData = model.changeHabbits( req.body)
	    //console.log('canvas',req.body.email);

        res.status(201).json({status:'ok', data: userData})
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}
// exports.changeInput = (req:Request,res:Response)=>{
// 	console.log(req.body)
// try{
// 	const userData = model.changeInput( req.body.idHabbit,req.body.idEl, req.body.value)
// 	//console.log('canvas',req.body.email);

// 	res.status(201).json({status:'ok', data: userData})
	
// }catch(e){
// 	res.status(400).json({
// 		status:'fail',
// 		message:e
// 	})
// }
// }

// exports.addNewHabbit = (req:Request,res:Response)=>{
// try{
// 	const userData = model.addNewHabbit()
// 	//console.log('canvas',req.body.email);

// 	res.status(201).json({status:'ok', data: userData})
	
// }catch(e){
// 	res.status(400).json({
// 		status:'fail',
// 		message:e
// 	})
// }
// }