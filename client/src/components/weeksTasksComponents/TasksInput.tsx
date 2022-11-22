import * as React from "react";
import CategoriesDiv from "./CategoriesDiv";
import {useState} from "react";

type tTasksProps = {
	addTask: (task: { task: string, category: string }) => void
}
const TasksInput = ({addTask}: tTasksProps) => {
	const [task, setTask] = useState('')
	const [isShowCategoriesDiv, setShowCategoriesDiv] = useState(false)
	const getTaskCategory = (category: string) => {
		addTask({task, category})
		setTask('')
		setShowCategoriesDiv(false)
	}
	return (
		<>
			<input
				type='text'
				value={task}
				onInput={(e) => {
					setTask((e.target as HTMLInputElement).value)
				}}/>
			<button onClick={(e) => {
				e.preventDefault()
				setShowCategoriesDiv(true)
			}}>Add Task
			</button>
			{
				isShowCategoriesDiv && <CategoriesDiv handler={getTaskCategory}/>
			}
		</>
	)
}
export default TasksInput