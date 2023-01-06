import {json} from 'body-parser'
const path = require('path');
// import categoriesRouter from "../routes/categoriesRouts";
// import userRouter from "../routes/userRouts";
// import imagesRouter from "../routes/imagesRouts";
// import translatesRouter from "../routes/translatesRouter";
import photosRouter from './routers/photosRouter'
import testAuthRouter from './routers/testAuthRouter'
import testRegRouter from './routers/testRegRouter'
import canvasChartRouter from './routers/canvasChartRouter'
import habbitsRouter from './routers/habbitsRouter'
import canvasImgBgRouter from './routers/canvasImgBgRouter';
//const mongoose = require('mongoose')

const mongoose = require('mongoose')
//const fs = require('fs')
const express=require('express')
const app = express();
//app.use(express.static(path.join(__dirname, 'client/build')));
//const PORT : string|number = process.env.PORT || 5000;
const cors = require('cors')
const bodyParser = require('body-parser');
 //app.use(cors());
// app.options('*', cors());  // enable pre-flight
 app.use(bodyParser.json());
 app.use(json())
//app.use('/',()=>console.log("*&&*&&"))
app.use('/api/photos',cors(),photosRouter)
app.use('/api/auth',cors(), testAuthRouter)
app.use('/api/reg',cors(), testRegRouter);
app.use('/api/canvaschart',cors(), canvasChartRouter);
app.use('/api/habbits',cors(), habbitsRouter);
app.use('/api/canvasimgbg',cors(), canvasImgBgRouter);

// app.use('/api/categories',cors(), categoriesRouter);
// app.use('/api/translates',translatesRouter);
// app.use('/api/images',cors(),imagesRouter);
// app.use('/api/users',userRouter);


// mongoose.connect('mongodb+srv://poli8512:Prima111!!@cluster0.zlz6u.mongodb.net/bujo',
// 	{
// 		useNewUrlParser:true,
// 		//useCreateIndex:true,
// 		//useFindAndModify:false,
// 		useUnifiedTopology: true
// 	})
// 	.then(()=>console.log('Connected')).catch((e:Error)=>console.log(e))
// //app.use('/')
app.listen(5000,()=>console.log("LIST"));
