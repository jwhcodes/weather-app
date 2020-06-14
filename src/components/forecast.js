import React, {useState} from 'react';



const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast() {
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Manchester,UK", {
	        "method": "GET",
	        "headers": {
		            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		            "x-rapidapi-key": "6f5668f5c4msh7312570c1b34da4p1bd90cjsn10f7f0aa9148"
            }
        })
    
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
            })
    }

    return (
         
        <div>
            <h2>Find Current Weather Condtions</h2>
            <div>
                {JSON.stringify(responseObj)}
        </div>
                <button onClick=
                    {getForecast}> Get Forecast </button>
             </div>
    )
};

export default Forecast;