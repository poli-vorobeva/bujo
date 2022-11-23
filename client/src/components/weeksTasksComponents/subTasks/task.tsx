import React from "react";

type tTask = {
	task: string;
	category: string;
	changeHandler: (task:string,param: string) => void
}
const Task = ({task, category, changeHandler}: tTask) => {
	const divideParams = [
		{
			category: 'study',
			params: ['by video lessons', 'by chapters', 'by time']
		},
		{
			category: 'chores',
			params: ['by time', 'by kind of activity']
		},
		{
			category: 'sport',
			params: ['by time', 'by lessons']
		}
	]
	const paramsIt = divideParams.find(e => e.category === category)

	return (
		<>
			<fieldset>
				<legend> Divide task ({task})</legend>
				{
					paramsIt.params.map(par => {
						return (
							<>
								<input
									type='radio'
									id={par}
									name={task}
									style={{display: 'block'}}
									onChange={() => {
										changeHandler(task, par)
									}}
								/>
								<label htmlFor={par}>{par}</label>
							</>
						)
					})
				}
			</fieldset>


		</>
	)
}
export default Task