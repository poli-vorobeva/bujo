import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
	requestCanvasChart,
	requestCanvasChartChange,
} from "../request/requestCanvasChart";
import {requestReg} from "../request/requestReg";
import {typeDataForCanvasChart} from "../dto";
import {chooseDateComponent} from "../components/ui/chooseDateComponent";

const initialState = {
	data: {},
};

interface IDataChart {
	data: typeDataForCanvasChart;
}

///const dispatch = useDispatch<AppDispatch>();
export interface IUser {
	email: string;
}

export const getCanvasData = createAsyncThunk(
	"getCanvasDataChart",
	async ({email}: IUser, thunkAPI) => {
		const response = await requestCanvasChart(email);
		if (response.status === "ok") {
			return {
				data: response.data,
			};
		}
		throw new Error("false data");
	}
);

export interface IDataChange {
	day: string;
	timeFrom: number;
	timeTo: number;
}

export type typeChangedData = {
	email: string,
	data: chooseDateComponent
}
export const editCanvasData = createAsyncThunk(
	"changeCanvasDataChart",
	async(payload:typeChangedData, thunkAPI) =>
{
	const response = await requestCanvasChartChange(payload);
	if (response.status === "ok") {
		return {
			data: response.data,
		};
	}
	throw new Error("false data");
}
)
;

const canvasCharSlice = createSlice({
	name: "data",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		// Add reducers for additional action types here, and handle loading state as needed
		builder.addCase(getCanvasData.fulfilled, (state, action) => {
			state.data = action.payload.data;
		}),
			builder.addCase(getCanvasData.rejected, (state, action) => {
				console.log("err");
			});
		builder.addCase(editCanvasData.fulfilled, (state, action) => {
			state.data = action.payload.data;
		}),
			builder.addCase(editCanvasData.rejected, (state, action) => {
				console.log("err");
			});
	},
});

const {actions, reducer} = canvasCharSlice;

export default reducer;

function useSelector() {
	throw new Error("Function not implemented.");
}

//export const { auth, reg } = actions;
