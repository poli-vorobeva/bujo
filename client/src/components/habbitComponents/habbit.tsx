import React from "react";

interface iHabbit{
    text: string;
}

const Habbit = ({text}:iHabbit)=>{
    return (
    <>
        <input type='text' value={text} readOnly />
    </>)
}
export default Habbit;