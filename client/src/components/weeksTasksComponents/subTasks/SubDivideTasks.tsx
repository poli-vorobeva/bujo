import * as React from "react";
import {tTasksList} from "../TasksList";
import Task from "./task";
import {useState} from "react";

type tSubDivided={
	tasks:tTasksList, onSubDivided:(data:Record<string,string>)=>void
}
const SubDivideTasks = ({tasks,onSubDivided}: tSubDivided) => {
	const [checkedCount,setCheckedCount]= useState(0)
const [buttonsData,setButtonsData]=useState({})
//	console.log(tasks.tasks.length,'!!')
	const submitForm = (e:any) => {
	e.preventDefault()

  if(checkedCount>=tasks.length){
  	onSubDivided(buttonsData)
	}
	}
	return (
		<form>
			<div style={{
				display: 'grid',
				gridTemplateColumns: "repeat(3,1fr)",
				gap: '5px'
			}}>
				{
					tasks.map(_task => {
						return <Task
							task={_task.task}
							category={_task.category}
							changeHandler={(task, param) => {
								//todo bad
								const data:Record<string, string>={}
								data[task]=param
								setButtonsData({...buttonsData,...data})
								setCheckedCount(pr=>pr+1)
							}}
						/>
					})
				}
			</div>
			<button onClick={submitForm}>Дальше</button>
		</form>
	)
}
export default SubDivideTasks