import React from "react";
import Days from './days'
import Habbits from './habbits'
import CanvasHabbit from './canvashabbit';
import './style.css'
const HabbitTrack = ()=>{
    const listOfHabbits = ['dd','fff','fff','','']
    return (<div className="main">
        <p></p>
        <Days count={21}/>
        <Habbits listOfHabbits={listOfHabbits} count={21}/>
        <CanvasHabbit/>
    </div>)
}

export default HabbitTrack;