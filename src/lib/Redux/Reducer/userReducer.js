import { ADD_DATA } from "../actionType"
const initialState = {
    data : [
        {name:"yuva" , age:25},
        {name:"yuva" , age:25}
    ]
}

const userReducer = (state=initialState,action) =>{
    console.log("action",action)
    switch(action.type){
        case ADD_DATA :
            return{
                ...state,
                data:action.payload
            }
            default:
                return state;
    }
}


export default userReducer;