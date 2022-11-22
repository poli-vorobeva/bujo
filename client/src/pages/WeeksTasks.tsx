import React, {useState} from 'react'
import TasksList, {tTask, tTasksList} from "../components/weeksTasksComponents/TasksList";
import TasksInput from "../components/weeksTasksComponents/TasksInput";
import SubDivideTasks from "../components/weeksTasksComponents/subTasks/SubDivideTasks";

const WeeksTasks = () => {
	const [tasksList, setTasksList] = useState([
		{task: 'one', category: 'study'},
		{task: 'two', category: 'study'},
		{task: 'three', category: 'study'}])
	//
	const [isSubDivide, setSubDivide] = useState(false)
	const onAddTask = (task: tTask) => {
		setTasksList(prev => [...prev, task])
	}
	const onSubDivided=(data:Record<string, string>)=>{
		console.log(data)
	}
	return (
		<div>
			{
				!isSubDivide
					? <>
						<TasksInput addTask={onAddTask}/>
						<TasksList tasks={tasksList}/>
						<button onClick={() => setSubDivide(true)}>Ready</button>
					</>
					: <SubDivideTasks onSubDivided={onSubDivided} tasks={tasksList}/>
			}
		</div>
	)
}
export default WeeksTasks