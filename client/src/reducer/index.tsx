export interface IUser{
    user:{
        name: string,
        password: string,
    }
}

const initialState:IUser = {
    user:{name:'', password:''}
};

type IAction = {
    type: string;
    name: string;
    password: string;
}
const reducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case "AUTH":
            return {
                ...state,
                user:{
                    name: action.name,
                    password: action.password,
                }
            };
        case "REG":
            return {
                ...state,
                user:{
                    name: action.name,
                    password: action.password,
                }
            };
        default:
            return state;
    }
}

export default reducer;