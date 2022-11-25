import axios from "axios";



export const listMenu = async()=>
    await axios.get('http://localhost:8000/apirandom/menu/'); 

export const listRecommend = async()=>
    await axios.get('http://localhost:8000/apireview/recommend/'); 