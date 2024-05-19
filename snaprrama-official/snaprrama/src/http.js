import axios from "axios"

export default axios.create({

baseURL:"http://localhost/snaprrama-official/snaprrama-dbn/public/api",
headers: {
    "Content-type": "application/json"
}

}) 
