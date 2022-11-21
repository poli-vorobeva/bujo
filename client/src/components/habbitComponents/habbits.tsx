import React from "react";
import  Habbit  from "./habbit";
import Input from './input';

interface IHabbits {
    listOfHabbits: string[];
    count: number
  }
const Habbits = ({listOfHabbits,count}: IHabbits)=>{
    const habbits = listOfHabbits.slice().map((it,ind)=>{
      return <div className="habbit_line" key={ind}>
        <Habbit text={it} key={ind}/>
        {new Array(count).fill(null).map((it,ind)=><Input id={it} check={false} key={ind}/>)}
      </div>
  })
    return (<p>
        {habbits}
        </p>)
}
export default Habbits;