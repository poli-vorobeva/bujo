import {reg, auth} from './actions';
import { useSelector, useDispatch } from "react-redux";
import {IUser} from './reducer';
import React, { useState } from 'react';

const TestForm = () => {

    const nameStore = useSelector((state:IUser) => state.user.name);
    const passwordStore =  useSelector((state:IUser) => state.user.password);
    const dispatch = useDispatch();
    const [name, changeName]=useState('');
    const [password, changePassword] = useState('');
    
    return (
        <div>
            <p>{nameStore}</p>
            <p>{passwordStore}</p>
            <input onChange={(e)=>changeName(e.target.value)} type="text" required/><br/>
            <input onChange={(e)=>changePassword(e.target.value)} type="text" required/><br/>
            <button onClick={() => dispatch(reg(name, password))}>Reg</button>
        </div>
    )
}

export default TestForm;