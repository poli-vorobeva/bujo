import {json} from 'body-parser'
// import categoriesRouter from "../routes/categoriesRouts";
// import userRouter from "../routes/userRouts";
// import imagesRouter from "../routes/imagesRouts";
// import translatesRouter from "../routes/translatesRouter";
import photosRouter from './routers/photosRouter'
import testAuthRouter from './routers/testAuthRouter'
import testRegRouter from './routers/testRegRouter'

//const mongoose = require('mongoose')
//const fs = require('fs')
const express=require('express')
const app = express()
//const PORT : string|number = process.env.PORT || 5000;
const cors = require('cors')
const bodyParser = require('body-parser');
 //app.use(cors());
// app.options('*', cors());  // enable pre-flight
 app.use(bodyParser.json());
 app.use(json())
//app.use('/',()=>console.log("*&&*&&"))
app.use('/photos',cors(),photosRouter)
app.use('/auth',cors(), testAuthRouter)
app.use('/reg',cors(), testRegRouter)

// app.use('/api/categories',cors(), categoriesRouter);
// app.use('/api/translates',translatesRouter);
// app.use('/api/images',cors(),imagesRouter);
// app.use('/api/users',userRouter);


// mongoose.connect('mongodb+srv://addData@cluster0.zlz6u.mongodb.net/english',
// 	{
// 		useNewUrlParser:true,
// 		useCreateIndex:true,
// 		useFindAndModify:false,
// 		useUnifiedTopology: true
// 	})
// 	.then(()=>console.log('Connected')).catch((e:Error)=>console.log(e))
// //app.use('/')
app.listen(3000,()=>console.log("LIST"));
