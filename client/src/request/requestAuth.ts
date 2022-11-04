export async function requestAuth(name: string, password: string):Promise<any>{
	try{
		const response = await fetch(
			//'http://localhost:5000/'
			'http://localhost:3000/'+'auth',{
				method: 'POST',
				headers:{
					'Access-Control-Allow-Origin': '*',
					'Content-Type':  'application/json'
				},
				body: JSON.stringify({name, password})
			})
		return response
	}catch (e) {
		console.log(e.message)
	}

};