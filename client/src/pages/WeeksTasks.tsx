import React, {useState} from "react";
import {tTask} from "../components/NewProposals/TasksList";
import TaskForm, {tTaskSubmit} from "../components/NewProposals/TaskForm";
import Calendar from "../components/CalendarComponents/Calendar";
const mock={purpose:'jump',goal:6, times:'times', per:'Day', repeat: {main:'Daily',sub:['Monday','Sunday']}}
const WeeksTasks = () => {
	const [tasksList, setTasksList] = useState([mock]);
	const [showCalendar, setShowCalendar] = useState(false)
	const addTask = (data: tTaskSubmit) => {
		setTasksList(prev => {
			const newAr = prev.slice()
			newAr.push(data)
			return newAr
		})
	}
	return (
		<div>
			<TaskForm onSubmitForm={(data) => {
				addTask(data)
			}}/>
			<ul>
				{
					tasksList.map((t: tTaskSubmit) => {
						return (
							<li>
								{`${t.purpose}--${t.goal}--${t.times}${t.per}
								--${t.repeat.main}(${t.repeat.sub.toString()})`}
							</li>
						)
					})
				}
			</ul>
			{/*{*/}
			{/*  showCalendar &&*/}
			<  Calendar/>
			{/*}*/}
		</div>
	);
};
export default WeeksTasks;
