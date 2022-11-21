import React from "react";
import  Day  from "./day";


interface IDays {
    count: number;
  }
const Days = ({count}: IDays)=>{
    const days = new Array(count).fill(null).map((it,ind)=><Day n={ind+1} key={ind}/>)
    return (<div className="days">
      <div></div>
        {days}
        </div>)
}
export default Days;