import React from "react";
interface ICheck{
    check: boolean;
    id: string
}
const Input = ({check,id}:ICheck)=>{
    return (<input type='checkbox' id={id}
    defaultChecked={check}
    />)
}

export default Input;