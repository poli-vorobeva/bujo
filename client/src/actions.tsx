export const auth = (name:string, password:string) => ({type: 'AUTH',name, password});
export const reg = (name:string, password:string) => ({type: 'REG', name, password});