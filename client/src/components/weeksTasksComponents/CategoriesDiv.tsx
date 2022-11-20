import * as React from "react";

const CategoriesDiv = (props:{handler:(category:string)=>void}) => {
	const categories = ['study', 'chores', 'sport'/*,'reading',  'hobby', 'learning'*/]

	return (
		<div>
			{
				categories.map(cat => {
					return (
						<button onClick={() => {
							props.handler(cat)
							// this.onAddTask({name:(e.target as HTMLInputElement).value, category: cat})
							// categoriesDiv.destroy()
							// this.taskItemInput.node.value=''
						}}>{cat}</button>
					)
				})
			}
		</div>
	)
}
export default CategoriesDiv