import React from "react";
import {useState} from "react";

const FormInput = ({value, data, onChangeInput}
										 : {
										 value: string, data: string[],
										 onChangeInput: (data: { value: string, section: string }) => void
									 }
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
		<span style={{position: 'relative'}}>
			<span style={inputStyles}>
				<input
					disabled type="text"
					value={inputValue as string}
					style={{width: '80%', border: 'none'}}
				/>
				<span style={buttonStyles}
							onClick={() => setIsShowOptions(!isShowOptions)}
				>Ic</span>
			</span>

			{
				isShowOptions && <span style={{
					position: 'absolute',
					top: '100%',
					left: '0',
					background: '#c3bcbc',
					padding: '5px',
					margin: '10px'
				}}>
			 			{
							data.map((e) => <li
								onClick={() => {
									onChangeInput({value: e, section: value})
									setInputValue(e)
									setIsShowOptions(!isShowOptions)
								}}>{e}</li>)
						}
			 		</span>
			}
		</span>
	)
}
export default FormInput