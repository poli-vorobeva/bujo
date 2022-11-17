
import auth from '../fakeData/auth';
import {dataUsers} from '../fakeData/canvasChart';

export default class Model {
    users:any=[];
    data: any=[];
    constructor(){
        this.users = auth;
        this.data = dataUsers;
    }
   
    getData(email:string){
        const user= this.data.find(it=>it.email===email);
        if(user){
            return user.data;
        }
        return new Array(30).fill(0).map((it,indx)=>{return {day:String(indx+1), time:[]}})
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
}