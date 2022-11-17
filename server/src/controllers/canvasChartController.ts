import {Request, Response} from "express";
import Model from "../model/model";
const fakedata = [ { day: 1, time:[2,3] }, { day: 2, time:[2,3] }];

exports.test=(req:Request,res:Response)=>{
	const model:Model = new Model();
		
	try{
	    console.log('canvas',req.body.email);
        const userData = model.getData(req.body.email);
        res.status(201).json({status:'ok', data: userData})
		
	}catch(e){
		res.status(400).json({
			status:'fail',
			message:e
		})
	}
}