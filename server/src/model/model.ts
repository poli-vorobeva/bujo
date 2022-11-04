import { Module } from "module";
import auth from '../fakeData/auth';

export default class Model {
    users:any=[];
    constructor(){
        this.users = this.getUsers();
    }
   
     getUsers(){
         this.users =auth;
        return this.users;
    }

    checkUsers(name: string, password: string){
        return this.users.find(it=>it.name===name&&it.password===password);
    }
}