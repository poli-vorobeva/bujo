
import { IDataBgCanvas, IImagesArray } from '../dto';
import auth from '../fakeData/auth';
import {dataUsers, typeDataForChart} from '../fakeData/canvasChart';
import { IDataHabbits } from '../fakeData/habbits';

export default class Model {
    users:any=[];
    data: any=[];
    dataUser:typeDataForChart= [];
    habbitsData: IDataHabbits 
    imgBg: any=[]
    constructor(){
        console.log('createModel')
        this.users = auth;
        this.data = dataUsers;
        this.dataUser =[];
    }
   
    getData(email:string){
        const user= this.data.find(it=>it.email===email);
        if(user){
            this.dataUser = user.dataChart
            return this.dataUser
        }
        this.dataUser = new Array(30).fill(0).map((it,indx)=>{return {day:String(indx+1), time:[]}})
        return this.dataUser
    }

    getHabbits(email:string){
        const user= this.data.find(it=>it.email===email);
        if(this.habbitsData){
            return this.habbitsData
        }
        if(user){
            this.habbitsData = user.dataHabbits
        
            return this.habbitsData
        }
        this.habbitsData = {
            days:21,
            habbits: new Array(5).fill(null).map((it,ind)=>{
                return {
                    habbitName: ind+'fvfv',
                    habbitId: ind + 'vcdcd',
                    data: new Array(21).fill(null).map(it=>false),
                }
            }),
        }
        
        return this.habbitsData
    }
    getImgBg(email:string,type:string){
        if(this.imgBg.length){
            return this.imgBg[type];
        }
        const user= this.data.find(it=>it.email===email);
        if(user){
            this.imgBg = user.dataImgBg;
            return {data: this.imgBg[type], type: type}
        }
        return []; 
    }

    addImgBg(data:IDataBgCanvas,type:string){ 
        
        this.imgBg[type] = data;
        return {data: this.imgBg[type], type: type};
    }

    // changeImgBg(img:IImagesArray,type:string){
    //     this.imgBg[type].pictures.find(it=>it.id ===img.id).coordinate = img.coordinate;
    //     return {data: this.imgBg[type], type: type};
    // }
    // deleteImgBg(img:IImagesArray,type:string){
    //     this.imgBg[type].pictures = this.imgBg[type].pictures.filter(it=>it.id !== img.id)
    //     return {data: this.imgBg[type], type: type};
    // }
    // changeBg(img:IImagesArray,type:string) {
    //     this.imgBg[type].pictures[0] = img;
    //     return {data: this.imgBg[type], type: type};
    // }
    // changeSetting(setting: {opasity: number, color: string}, type:string){
    //     this.imgBg[type].setting = setting;
    //     return {data: this.imgBg[type], type: type};
    // }

    checkUsers(email: string, password: string){
        const user = this.users.find(it=>it.email===email&&it.password===password);
        if(user){
            return user
        }
        return null
    }

    addUser(email: string, name: string, password: string){
        const user = this.users.find(it=>it.email===email);
        if(user){
            return false;
        }
        
        //check name
        //add user
        return true
    }
    changeHabbits(data:IDataHabbits){
        this.habbitsData = data;
    }

    changeData( email:string,day: string,timeFrom: number, timeTo: number){
        //todo request to database by email
        console.log(this.dataUser)
        console.log("DAY",day)
        const el = this.dataUser.find(el=>el.day==day);
        console.log(el)
        if(el){
            el.time = [timeFrom, timeTo];
        }
       return this.dataUser

        }
    // changeName(idHabbit: string,value: string){
    //     const el = this.habbitsData.habbits.find(it=>it.habbitId ===idHabbit);
    //     if(el){
    //         el.habbitName=value;
    //     }
    //     return this.habbitsData
    // }
    // changeInput(idHabbit: string,idEl: string,value: boolean){
    //     const habbit = this.habbitsData.habbits.find(it=>it.habbitId ===idHabbit);
    //     if(habbit){
    //         habbit.data[idEl] = value;
    //     }
    //     return this.habbitsData;
    // }
    // addNewHabbit(){
    //     this.habbitsData.habbits.push({
    //         habbitName: '',
    //         habbitId: String(Math.floor(Math.random()*100)),
    //         data:new Array(21).fill(null).map(it=>false)
    //     },);
    //     return  this.habbitsData;
    // }
}