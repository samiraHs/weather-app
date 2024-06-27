import { createContext,useContext,useState } from "react";
import axios from "axios"

const CityContext = createContext();
export const context =() => useContext(CityContext);


export const CityProvider = ({children}) => {
    //value
     const [weatherData,setWeatherData]=useState([])
     const [city,setCity]=useState("");
      const [coords,setCoords]=useState([])
     const key = import.meta.env.VITE_API_KEY
     const fetchWeatherData=async()=>{
        try{
           const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&cnt=5`)
           setWeatherData(response.data)
         
           const mapResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${city}&format=json`)
         if(mapResponse.data.length>0){
            const{lat,lon}=mapResponse.data[0]
            setCoords([lat,lon])
         }
         // console.log(coords);
        }catch(error){
            console.log("error fetching weather data",error);
        }

     }
     return(
        <CityContext.Provider value={{fetchWeatherData,city,setCity,weatherData,coords}}>
            {children}
        </CityContext.Provider>
     )

}
