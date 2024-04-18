import Home from './Components/Home/Home'
import WeatherContextProvider from './Context/WeatherContext'


export default function App() {
 

 return<>
 <WeatherContextProvider>

 <Home/>
 </WeatherContextProvider>

 </> 

}
