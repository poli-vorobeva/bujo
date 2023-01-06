import {Request, Response} from "express";
import Model from "../model/model";


exports.test=(req:Request,res:Response)=>{
	const model:Model = new Model();
	
	try{
		console.log('BODYY',req.body.email, req.body.password)
		const user = model.checkUsers(req.body.email, req.body.password);
		if(user){
			res.status(201).json({status:'ok', email: user.email,name: user.name, password: user.password})
		}else{
			res.status(201).json({status:'fail', email: req.body.email, password: req.body.password})
		}
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}