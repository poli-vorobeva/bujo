import React from "react";
import {getMonthsLength} from "../chartComponents/canvasFunctions";
import {spawn} from "child_process";

export const weekDaysIndxs = ['Sunday', 'Monday', 'Tuesday',
	'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const getDay = {}
const Calendar = () => {
	const date = new Date()
	const month = date.getMonth() + 1
	const year = date.getFullYear()
	const length = getMonthsLength(date.getMonth() + 1)
	const firstDayOfMonth = new Date(`${year},${month}`).getDay()
	const weeks = new Array(Math.ceil(length / 7)).fill(weekDaysIndxs)
	console.log(weeks)
	let currentDate = 1
	return (
		<div style={{display: 'flex', flexFlow: 'row nowrap'}}>
			{
				weeks.map((w,i) => {
					return <div key={w+i} style={{display: 'flex', flexFlow: 'column nowrap', border: '1px solid black'}}>
						{w.map((d: string,j:number) => {
							return <div  key={w+j+i} style={{border: '1px solid red'}}>
								<span style={{background:'green'}}>{d}</span>
								<span>content</span>
							</div>
						})}
					</div>
				})
			}
		</div>
	)
}
export default Calendar