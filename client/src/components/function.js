import axios from "axios";



export const listEvent = async()=>
    await axios.get('http://localhost:8000/apirandom/menu/'); 
