import * as React from "react";

const TasksList=()=>{
	const tasksListMockData = [
		{name: 'one', category: 'study'},
		{name: 'two', category: 'study'},
		{name: 'three', category: 'study'}]
// 	const getAllTasks=()=> {
// 	//	return this.tasksListData
// 	}
//
// public addTaskToList(taskData: { name: string; category: string }) {
// 		this.tasksListData.push(taskData)
// 		this.createTaskLi(taskData.name)
// 	}

	return(
		<ul>
			{
				tasksListMockData.map(task=>{
					return <li>{task.name}</li>
				})
			}
		</ul>
	)
}
export default TasksList