import React from 'react'
import style from './DaysForecast.module.css'

export default function DaysForecast({ currentData, cairoData }) {


    return <>
        <div className='col-md-6'>
            <div className={style.daysForecast}>
                <h5 className='text-secondary mb-2'>2 Days forecast</h5>
                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[1].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[1].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[1].hour[6].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[1].hour[6].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[1].hour[6].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[1].hour[6].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Morning</span>
                        </div>
                    </div>
                </div>

                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[1].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[1].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[1].hour[12].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[1].hour[12].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[1].hour[12].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[1].hour[12].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Afternoon</span>
                        </div>
                    </div>
                </div>

                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[1].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[1].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[1].hour[21].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[1].hour[21].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[1].hour[21].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[1].hour[21].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Night</span>
                        </div>
                    </div>
                </div>

                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[2].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[2].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[2].hour[6].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[2].hour[6].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[2].hour[6].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[2].hour[6].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Morning</span>
                        </div>
                    </div>
                </div>

                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[2].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[2].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[2].hour[12].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[2].hour[12].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[2].hour[12].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[2].hour[12].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Afternoon</span>
                        </div>
                    </div>
                </div>

                <div className='forecast'>
                    <div className='row forecast1 align-items-center text-center'>
                        <div className='col-md-4'>
                            {currentData ? <span>{currentData?.forecast?.forecastday[2].date.split('-').splice(1, 3).join('/')}</span> : <span>{cairoData.forecast.forecastday[2].date.split('-').splice(1, 3).join('/')}</span>}
                        </div>
                        <div className='col-md-4'>
                            <div className='d-flex align-items-center justify-content-center'>
                                {currentData ? <img src={`https:${currentData?.forecast?.forecastday[2].hour[21].condition.icon}`} alt='Forecast Img' /> : <img src={`https:${cairoData.forecast.forecastday[2].hour[21].condition.icon}`} alt='Forecast Img' />}

                                {currentData ? <span>{currentData?.forecast?.forecastday[2].hour[21].condition.text.split(' ').splice(0, 2).join(' ')}</span> : <span>{cairoData.forecast.forecastday[2].hour[21].condition.text.split(' ').splice(0, 2).join(' ')}</span>}

                            </div>

                        </div>
                        <div className='col-md-4'>
                            <span>Night</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
}
