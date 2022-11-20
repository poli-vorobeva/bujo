import {barRangeData, typeItem} from "../notUsed/mockData";
import * as React from "react";
import {useSelector} from "react-redux";
import {stateType} from "../../../store";

type propsType = {
	setDates: (datesArray: typeItem[], mark: string) => void
}
const ButtonsComponent = (props: propsType) => {
	const canvasDates=useSelector((state:stateType) => state.canvasDataChart.data)
	return (
		<>
			<button onClick={() => 	props.setDates(canvasDates.filter(e => !e.time.length), 'add')}
			>Add Data
			</button>
			<button onClick={() => props.setDates(canvasDates.filter(e => e.time.length), 'edit')}>Change Data
			</button>
		</>
	)
}
export default ButtonsComponent