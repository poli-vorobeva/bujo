
import auth from '../fakeData/auth';
import {dataUsers, typeDataForChart} from '../fakeData/canvasChart';

export default class Model {
    users:any=[];
    data: any=[];
    dataUser:typeDataForChart= [];
    constructor(){
        this.users = auth;
        this.data = dataUsers;
        this.dataUser =[];
    }
   
    getData(email:string){
        const user= this.data.find(it=>it.email===email);
        if(user){
            this.dataUser = user.data
            return this.dataUser
        }
        this.dataUser = new Array(30).fill(0).map((it,indx)=>{return {day:String(indx+1), time:[]}})
        return this.dataUser
    }


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
}