import React, {useEffect, useState} from "react";

const FormInput = ({value, data}
										 : { value: string, data: string[] }
) => {
	const [isShowOptions, setIsShowOptions] = useState(false)
	const [inputValue, setInputValue] = useState(data[0])
	const inputStyles = {
		border: '1px solid gray',
		width: '100px',
		display: 'inline-block',
	}
	const buttonStyles = {
		cursor: 'pointer'
	}
	return (
		<span style={{position:'relative'}}>
			<span style={inputStyles}>
				<input
					disabled type="text"
					value={inputValue as string}
				style={{width:'80%',border:'none'}}
				/>
				<span style={buttonStyles} onClick={() => setIsShowOptions(!isShowOptions)}>Ic</span>
			</span>

			{
				isShowOptions && <span style={{
					position:'absolute',
					top: '100%',
					left: '0',
					background: '#c3bcbc',
					padding: '5px',
					margin: '10px'
				}}>
			 			{
							data.map((e) => <li
								onClick={() => {
									setInputValue(e)
									setIsShowOptions(!isShowOptions)
								}}>{e}</li>)
						}
			 		</span>
			}
		</span>
	)
}
const RepeatGoal = ({data,onChecked}
: { data: tRepeat[],onChecked:(data:{main:string,sub:string[]})=>void }) => {
	const [value, setValue] = useState(data[0].main)
	const [checkedOptions, setCheckedOptions] = useState(new Set())
	const [isShowChecked, setIsShowChecked] = useState(false)
	const [isShowModal, setIsShowModal] = useState(false)
	return (
		<span>
			<input type="text" disabled value={value}/>
			<span onClick={() => {
				setIsShowModal(!isShowModal)
			}}>Ic</span>
			{
				isShowModal &&
				data.map(d => {
					return <li onClick={() => {
						if(value!==d.main){
							setCheckedOptions(new Set())
						}
						setValue(d.main)
						setIsShowChecked(!isShowChecked)

					}}>{d.main})</li>
				})
			}
			{
				isShowChecked &&
				data.map(e => {
					if (e.main === value) {
						console.log(e.main,'#')
						return (
							<span onMouseLeave={() => {
								setIsShowChecked(false)
								setIsShowModal(false)
								onChecked({main:value,sub:checkedOptions})
							}}>
										{
											Object.entries(e.sub).map(c => {
												return <span
													style={{background: checkedOptions.has(c[0]) ? 'blue' : ''}}
													onClick={() => {
														if (e.main === value) {
															setCheckedOptions((prev) => {
																const obj = new Set(prev)
																obj.has(c[0]) ? obj.delete(c[0]) : obj.add(c[0])
																return obj
															})
														}
													}
													}
												>	{c[0]}	</span>
											})
										}
								</span>
						)
					}
				})
			}
		</span>
	)
}
type tRepeat = { main: string, sub: Record<string, boolean> }

const TaskForm = () => {
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
	const goalStyles = {
		display: 'flex',
		flexFlow: 'row nowrap',
		padding: '10px'
	}
	return (
		<>
			<form>
				<h4>New Purpose</h4>
				<fieldset>
					<legend>Purpose Title</legend>
					<input type="text" id='addTaskTitle' placeholder='read the book'/>
				</fieldset>
				<fieldset style={goalStyles}>
					<legend>Goal</legend>
					<input type="number" min="1" max="20" step="1" value='1'/>
					{
						Object.entries(goalOptions).map(
							(data) => {
								return <FormInput data={data[1]} value={data[0]}/>
							})
					}
				</fieldset>
				<fieldset>
					<legend>Repeat</legend>
					<RepeatGoal onChecked={(data)=>{console.log(data)}} data={repeat}/>
				</fieldset>
			</form>
		</>
	)
}
export default TaskForm