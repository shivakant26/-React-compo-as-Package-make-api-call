import { ADD_DATA } from "../actionType"
import axios from "axios"

export const getData = () =>{
    return (dispatch) => {
        return axios.get("https://jsonplaceholder.typicode.com/users")
            .then(data => {
                dispatch({
                    type:ADD_DATA,
                    payload: data
                })
            })
    };
}