
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