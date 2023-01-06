import {Request, Response} from "express";
import Model from "../model/model";


exports.test=(req:Request,res:Response)=>{
	const model:Model = new Model();
	
	try{
		console.log('reg',req.body.email,req.body.name, req.body.password)
		const newUser = model.addUser(req.body.email,req.body.name, req.body.password);
		if(newUser){
			res.status(201).json({status:'ok', email: req.body.email, name: req.body.name, password: req.body.password})
		}else{
			res.status(201).json({status:'fail', email: req.body.email, name: req.body.name,  password: req.body.password})
		}
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}