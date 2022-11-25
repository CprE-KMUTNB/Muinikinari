import axios from "axios";



export const listMenu = async()=>
    await axios.get('http://localhost:8000/apirandom/menu/'); 

export const listMenuveg = async()=>
    await axios.get('http://localhost:8000/apirandom/menuveg/');   

export const listMenudiet = async()=>
    await axios.get('http://localhost:8000/apirandom/menudiet/');    

export const listMenucarni = async()=>
    await axios.get('http://localhost:8000/apirandom/menucarni/');  

export const listRecommend = async()=>
    await axios.get('http://localhost:8000/apireview/recommend/'); 