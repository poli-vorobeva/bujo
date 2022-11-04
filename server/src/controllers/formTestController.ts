import {Request, Response} from "express";
import Model from "../model/model";


exports.test=(req:Request,res:Response)=>{
	const model:Model = new Model();
	
	try{
		console.log('BODYY',req.body.name, req.body.password)
		const answer = model.checkUsers(req.body.name, req.body.password);
		if(answer){
			res.status(201).json({status:'ok', name: req.body.name, password: req.body.password})
		}else{
			res.status(201).json({status:'fail', name: req.body.name, password: req.body.password})
		}
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}