import React from "react";
import {useState} from "react";
import {tRepeat} from "./TaskForm";

const RepeatGoal = ({data, onChecked}
											: { data: tRepeat[], onChecked: (data: { main: string, sub: string[] }) => void }) => {
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
						if (value !== d.main) {
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
						console.log(e.main, '#')
						return (
							<span onMouseLeave={() => {
								setIsShowChecked(false)
								setIsShowModal(false)
								onChecked({main: value, sub: Array.from(checkedOptions) as string[]})
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
export default RepeatGoal
