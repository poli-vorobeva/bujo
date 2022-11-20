import ChooseDateComponent, {chooseDateComponent} from "./chooseDateComponent";
import {typeItem} from "../notUsed/mockData";
import * as React from "react";
import ButtonsComponent from "./ButtonsComponent";
import {useState} from "react";

const EditDataComponent = (props: { editDataHandler: (data: chooseDateComponent, action: string) => void }) => {

	const [addDateData, setAddData] = useState(false)
	const [datesData, setDatesData] = useState([])
	const [editDateData, setEditData] = useState(false)
	const buttonsHandler = (datesArray: typeItem[], mark: string) => {
		console.log(datesArray,'butHand')
		setDatesData(datesArray)
		setAddData(mark === 'add')
		setEditData(mark !== 'add')
	}
	return (
		<div>
			<ButtonsComponent setDates={buttonsHandler}/>
			{
				addDateData && <ChooseDateComponent dateArray={datesData}
																						handler={(data) => {
																							props.editDataHandler(data, 'add')
																							setAddData(false)
																						}}/>
			}
			{
				editDateData && <ChooseDateComponent
					dateArray={datesData}
					handler={(data) => {
						props.editDataHandler(data, 'edit')
						setEditData(false)
					}}/>
			}
		</div>
	)
}
export default EditDataComponent