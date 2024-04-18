import axios from 'axios';
import {createContext} from 'react'

export let weatherContext = createContext();

export default function WeatherContextProvider(props){

   function getData(country){
   return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=e75e227ce6ef4d53a34132818241001&q=${country}&days=3`)
   .then((response) => response)
   .catch((err)=>err)
}

    return <weatherContext.Provider value={{getData}}>
          {props.children}
     </weatherContext.Provider>
   
}
