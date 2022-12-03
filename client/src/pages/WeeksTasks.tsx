import React, {useState} from "react";
import TasksList, {
	tTask,
	tTasksList,
} from "../components/weeksTasksComponents/TasksList";
import SubDivideTasks from "../components/weeksTasksComponents/subTasks/SubDivideTasks";
import TaskForm from "../components/weeksTasksComponents/TaskForm";

const WeeksTasks = () => {
	const [tasksList, setTasksList] = useState([
		{task: "one", category: "study"},
		{task: "two", category: "study"},
		{task: "three", category: "study"},
	]);
	//
	const [isSubDivide, setSubDivide] = useState(false);
	const onAddTask = (task: tTask) => {
		setTasksList((prev) => [...prev, task]);
	};
	const onSubDivided = (data: Record<string, string>) => {
		console.log(data);
	};
	const showTask=()=>{
		console.log("TASK")
	}
	return (
		<div>
			<TaskForm/>
			<button onClick={() =>showTask()}>Ready</button>
		</div>
	);
};
export default WeeksTasks;
