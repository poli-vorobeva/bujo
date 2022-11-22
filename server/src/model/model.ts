
import auth from '../fakeData/auth';
import {dataUsers, typeDataForChart} from '../fakeData/canvasChart';
import { IDataHabbits } from '../fakeData/habbits';

export default class Model {
    users:any=[];
    data: any=[];
    dataUser:typeDataForChart= [];
    habbitsData: IDataHabbits;
    constructor(){
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
            })
        }
        return this.habbitsData
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

    changeData( day: string,timeFrom: number, timeTo: number){
        const el = this.dataUser.find(el=>el.day==day);
        if(el){
            el.time = [timeFrom, timeTo];
        }
       return this.dataUser

        }
    changeName(idHabbit: string,value: string){
        const el = this.habbitsData.habbits.find(it=>it.habbitId ===idHabbit);
        if(el){
            el.habbitName=value;
        }
        return this.habbitsData
    }
    changeInput(idHabbit: string,idEl: string,value: boolean){
        const habbit = this.habbitsData.habbits.find(it=>it.habbitId ===idHabbit);
        if(habbit){
            habbit.data[idEl] = value;
        }
        return this.habbitsData;
    }
}