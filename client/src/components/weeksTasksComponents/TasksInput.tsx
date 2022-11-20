import * as React from "react";
import CategoriesDiv from "./CategoriesDiv";
import {useState} from "react";

const TasksInput = () => {
const [isShowCategoriesDiv,setShowCategoriesDiv]=useState(false)
	const getTaskCategory=(category:string)=>{
	console.log(category,'!!!')
	}
	return (
		<>
			<input
				type='text'
				onChange={(e) => {
				}}/>
			<button onClick={(e) => {
				e.preventDefault()
				setShowCategoriesDiv(true)
			}}>Add Task</button>
			{
				isShowCategoriesDiv && <CategoriesDiv handler={getTaskCategory}/>
			}
		</>
	)
}
export default TasksInput