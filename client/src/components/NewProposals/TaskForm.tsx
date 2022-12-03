import React, {FormEvent, useEffect, useState} from "react";
import FormInput from "./FormIput";
import RepeatGoal from "./Repeat";

export type tRepeat = { main: string, sub: Record<string, boolean> }
export type tTaskSubmit={purpose:string,
	goal: number, times: string,
	per: string, repeat: { main: string; sub: any[] }
}
const TaskForm = ({onSubmitForm}: {
	onSubmitForm: (data: tTaskSubmit) => void
}) => {
	const goalOptions = {
		times: ['Times', 'Mins'],
		per: ['Day', 'Month', 'Week']
	}
	const repeat = [
		{
			main: 'Daily',
			sub: {
				'Monday': false, 'Tuesday': false,
				'Wednesday': false, 'Thursday': false, 'Friday': false, 'Saturday': false, 'Sunday': false
			}
		},
		{
			main: 'Monthly',
			sub: {
				1: false, 2: false, 3: false, 4: false, 5: false, 6: false,
				7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false,
				14: false, 15: false, 16: false, 17: false, 18: false, 19: false, 20: false,
				21: false, 22: false, 23: false, 24: false, 25: false, 26: false, 27: false, 28: false,
				29: false, 30: false, 31: false
			}
		},
		{
			main: 'Interval',
			sub: {
				'Repeat every 2': false, 'Repeat every 3': false, 'Repeat every 4': false,
				'Repeat every 5': false, 'Repeat every 6': false, 'Repeat every 7': false
			}
		}]
	const [purpose,setPurpose]=useState('')
	const [goal, setGoal] = useState(1)
	const [times, setTimes] = useState(goalOptions.times[0])
	const [per, setPer] = useState(goalOptions.per[0])
	const [rept, setRepeat] = useState({main: 'Daily', sub: []})
	const goalStyles = {
		display: 'flex',
		flexFlow: 'row nowrap',
		padding: '10px'
	}
	//1 times day  10 times day   100 times day-- if times day -> max 20
	//1 mins day   10 mins day   100 mins day -- if mins day -> max 400
	// 1 times month  10 times month   100 times month -- if times month -> max 30
	// 1 mins month  10 mins month   100 mins month --   if mins month -> max 30
	// 1 times week  10 times week   100 times week  -- times week--> max 7
	//1 mins week  10 mins week     100 mins week  --  max 7
	const onSubmit = (e:FormEvent) => {
		e.preventDefault()
		onSubmitForm({purpose,goal, times, per, repeat: rept})
	}
	return (
		<>
			<form onSubmit={(e)=>onSubmit(e)}>
				<h4>New Purpose</h4>
				<fieldset>
					<legend>Purpose Title</legend>
					<input
						onInput={(e)=>setPurpose((e.target as HTMLInputElement).value)}
						type="text" id='addTaskTitle'
						placeholder='read the book' value={purpose}/>
				</fieldset>
				<fieldset style={goalStyles}>
					<legend>Goal</legend>
					<input type="number" min="1" max="100"
								 step="1" value={goal}
								 onChange={(e) => setGoal(+e.target.value)}
					/>
					{
						Object.entries(goalOptions).map(
							(data) => {
								return <FormInput data={data[1]}
																	value={data[0]}
																	key={data[0]}
																	onChangeInput={(data) => {
																		(data.section === 'times')
																			? setTimes(data.value)
																			: setPer(data.value)
																	}}/>
							})
					}
				</fieldset>
				<fieldset>
					<legend>Repeat</legend>
					<RepeatGoal onChecked={(data) => {
						setRepeat(data)
					}} data={repeat}/>
				</fieldset>
				<button>Ready</button>
			</form>
		</>
	)
}
export default TaskForm