import React, { useContext, useEffect, useState } from 'react'
import DaysForecast from '../DaysForecast/DaysForecast'
import style from './Home.module.css'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import { weatherContext } from '../../Context/WeatherContext'

export default function Home() {

    const [currentData, setCurrentData] = useState([])
    const [cairoData, setCairoData] = useState([])

    let { getData } = useContext(weatherContext)

    async function getWeatherData(country) {
        let { data } = await getData(country)
        setCurrentData(data)
        console.log(data);
    }

    async function getCairoWeather(cairo) {
        let { data } = await getData(cairo)
        setCairoData(data)
        console.log(data);
    }

    useEffect(() => {
        getWeatherData('cairo')
        getCairoWeather('cairo')
    }, [])


    return <>
        <div className='mainComponent'>

            <div className='container'>

                <div className={style.searchInput}>
                    <input id='searchInput' onInput={() => getWeatherData(document.getElementById('searchInput').value)} type='text' className='form-control' placeholder='search for city..' />
                </div>

                <div className='row g-4'>

                    <CurrentWeather currentData={currentData} cairoData={cairoData} />

                    <DaysForecast currentData={currentData} cairoData={cairoData} />

                </div>

            </div>
        </div>
    </>
}
