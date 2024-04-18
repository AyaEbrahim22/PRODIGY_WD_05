import React from 'react'
import style from './TodayWeather.module.css'

export default function TodayWeather({todayData , cairoData}) {


    return <>
        <div className={style.todayWeather}>
            <h5 className='mb-3 text-secondary'>Today's forecast</h5>
            <div className='row text-center flex-wrap gy-4 align-items-center'>
                <div className='col-md-2 border-end border-secondary p-0'>
                    
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>6:00 AM</span>
                        </div>
                        <div className='col-md-12'>
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[6].condition.icon}`} alt='weather img'/> : <img src={`https:${cairoData.forecast.forecastday[0].hour[6].condition.icon}`} alt='weather img'/> }
                        </div>
                        <div className='col-md-12'>
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[6].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[6].temp_c}<sup>o</sup>C</span> }
                        </div>
                    </div>
                
                </div>
                <div className='col-md-2 border-end border-secondary p-0'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>9:00 AM</span>
                        </div>

                        <div className='col-md-12'>
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[9].condition.icon}`} alt='weather img' /> : <img src={`https:${cairoData.forecast.forecastday[0].hour[9].condition.icon}`} alt='weather img' /> }

                        </div>

                        <div className='col-md-12'>
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[9].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[9].temp_c}<sup>o</sup>C</span> }

                        </div>
                      
                    </div>
                </div>
                <div className='col-md-2 border-end border-secondary p-0'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>12:00 PM</span>
                        </div>

                        <div className='col-md-12'>
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[12].condition.icon}`} alt='weather img' /> : <img src={`https:${cairoData.forecast.forecastday[0].hour[12].condition.icon}`} alt='weather img' /> }
                        </div>
                        <div className="col-md-12">
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[12].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[12].temp_c}<sup>o</sup>C</span> }

                        </div>
                    </div>
                </div>
                <div className='col-md-2 border-end border-secondary p-0'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>3:00 PM</span>
                        </div>

                        <div className='col-md-12'>
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[15].condition.icon}`} alt='weather img' /> : <img src={`https:${cairoData.forecast.forecastday[0].hour[15].condition.icon}`} alt='weather img' /> }

                        </div>
                        <div className='col-md-12'>
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[15].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[15].temp_c}<sup>o</sup>C</span> }

                        </div>
                        
                    </div>
                </div>
                <div className='col-md-2 border-end border-secondary p-0'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>6:00 PM</span>
                        </div>
                        <div className='col-md-12'>
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[18].condition.icon}`} alt='weather img' /> : <img src={`https:${cairoData.forecast.forecastday[0].hour[18].condition.icon}`} alt='weather img' /> }

                        </div>
                        <div className='col-md-12'>
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[18].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[18].temp_c}<sup>o</sup>C</span> }

                        </div>
                    </div>
                </div>
                <div className='col-md-2 p-0'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-md-12'>
                        <span>9:00 PM</span>

                        </div>
                        <div className="col-md-12">
                        {todayData? <img src={`https:${todayData?.forecast?.forecastday[0].hour[21].condition.icon}`} alt='weather img' /> : <img src={`https:${cairoData.forecast.forecastday[0].hour[21].condition.icon}`} alt='weather img' /> }

                        </div>
                        <div className="col-md-12">
                        {todayData? <span>{todayData?.forecast?.forecastday[0].hour[21].temp_c}<sup>o</sup>C</span> :  <span>{cairoData.forecast.forecastday[0].hour[21].temp_c}<sup>o</sup>C</span> }

                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
}
