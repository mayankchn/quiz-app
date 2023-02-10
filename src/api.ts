import axios from "axios"

export const getQuizes = () => {
    return axios.get("https://opentdb.com/api.php?amount=10").then((response)=>{
        // console.log('response is ',response.data)
        return response.data;
    })
}