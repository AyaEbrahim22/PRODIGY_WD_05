
import TodayWeather from '../TodayWeather/TodayWeather'
import style from './CurrentWeather.module.css'


export default function CurrentWeather({currentData , cairoData}) {
   

   return <>

        <div className='col-md-6'>
           
                <div className={`${style.currentWeather} row align-items-center justify-content-between h-100`}>
                    <div className='col-md-4 text-center'>
                        <div>
                        { currentData? <h2>{currentData?.location?.name.split(' ').splice(0, 2).join(' ')}</h2> : <h2>{cairoData.location.name}</h2> }
                        { currentData? <p>{currentData?.location?.region}, {currentData?.location?.country}</p> : <p>{cairoData.location.region}, {cairoData.location.country}</p>  }
                        {currentData? <h1 className='mt-1 degreeSize'>{currentData?.current?.temp_c}<sup>o</sup>C</h1> : <h1 className='mt-5 degreeSize'>{cairoData.current.temp_c}<sup>o</sup>C</h1>}

                            
                        </div>
                    </div>
                    <div className='col-md-4 text-center'>
                        {currentData? <img src={`https:${currentData?.current?.condition.icon}`} alt='Weather Img' className='w-100'/> : <img src={`https:${cairoData.current.condition.icon}`} alt='Weather Img' className='w-100'/>}
                        
                    </div>
                    <div className='col-md-12'>

                    <TodayWeather todayData={currentData} cairoData={cairoData} />
                    </div>
                </div>

        </div>
    </>
}
