import React,{useState} from 'react'
import { GoogleMap,LoadScript,Marker} from '@react-google-maps/api';
import style from'../Style/map.css';

const court =[{team:"Atlanta Hawks" , lat:33.758065063963166,lng: -84.3961098543853},
{team:"Boston Celtics" , lat:42.366121939917534, lng:-71.061997802499},
{team:"Brooklyn Nets" , lat:40.68269529542535, lng:-73.97538341546125},
{team:"Charlotte Hornets" , lat:35.225362223180696, lng: -80.83927308489243},
{team:"Chicago Bulls" , lat:41.880874503205845, lng:-87.6741651731047},
{team:"Cleveland Cavaliers" , lat:41.496753467666345, lng: -81.68811911728936},
{team:"Dallas Mavericks" , lat:32.790508031478964,  lng:-96.81014741377228},
{team:"Denver Nuggets" , lat:39.74887920043605, lng: -105.00761353082244},
{team:"Detroit Pistons" , lat:42.34129290367096, lng: -83.05510636940153},
{team:"Golden State Warriors" , lat:37.76819075848294,  lng:-122.38758625600678},
{team:"Houston Rockets" , lat:29.75095599033368, lng:-95.36203612916397},
{team:"Indiana Pacers", lat:39.76407711571312,  lng:-86.15569507130543},
{team:"Los Angeles Clippers" , lat:34.04320417253058,  lng:-118.2670502542329},
{team:"Los Angeles Lakers" , lat:34.04322195269183,  lng:-118.26715754258477},
{team:"Memphis Grizzlies" , lat:35.13829093284135, lng: -90.0505756732459},
{team:"Miami Heat" , lat:25.781652566443043, lng: -80.18699045990344},
{team:"Milwaukee Bucks" , lat:43.045252676822976,  lng:-87.91712870986845,},
{team:"Minnesota Timberwolves	" , lat:44.979569527121164,  lng:-93.27597668467962,},
{team:"New Orleans Pelicans" , lat:29.94918382120853, lng:-90.0820675310071},
{team:"New York Knicks" , lat:40.75081614742006, lng:-73.99336437226223},
{team:"Oklahoma City Thunder" , lat:35.46357323439356,  lng:-97.5149314118767},
{team:"Orlando Magic" , lat:28.539419311009393,  lng:-81.38362819665484},
{team:"Philadelphia 76ers" , lat:39.90144839832693, lng:-75.17182929829136},
{team:"Portland Trail Blazers" , lat:45.53170787767019,  lng:-122.6668530306882},
{team:"Phoenix Suns" , lat:33.4459428817857,  lng:-112.071114471431},
{team:"Sacramento Kings" , lat:38.580410521677926,  lng:-121.49961299007899,},
{team:"San Antonio Spurs" , lat:29.42726304207886,  lng:-98.43745447334499,},
{team:"Toronto Raptors" , lat:27.94279114654244,  lng:-82.45176445683991},
{team:"Utah Jazz" , lat:40.768495594535956,  lng:-111.90091574060195},
{team:"Washington Wizards" , lat:38.8982611761956, lng:-77.02081163084065}]
const containerStyle = {
    width: '800px',
    height: '400px'
};
function Map() {
    const [selectplace, setSelectedplace] = useState(" ")

    const handleClick = (user) => {
      const set = user === selectplace ? " " : user
      setSelectedplace(set)
    }
    return (
<div className="mapcontainer">
    <div className="mappy">
    <LoadScript
      googleMapsApiKey= "AIzaSyDCyp4PlSITFDqxhZpxEwjoQkGKxVPSNZk"
    >
      <GoogleMap
        className="nbamap"
        mapContainerClassName="nbamap"
        mapContainerStyle={containerStyle}
        zoom={3}
        center={{lat:41.00622204245164,lng:-100.43838142083686}}
      >
            {court.map((info) => (
                <Marker
                  position={{
                    lat:info.lat,
                    lng:info.lng
                  }}
                  onClick={() => {
                    handleClick(info)
                    console.log(info)
                  }}
                />
                ))      
            }

        
      </GoogleMap>

    </LoadScript>
    <div className="infowindow" style={{display:"block", width:"550px", color:"white"}}>
           <h2> {selectplace.team}</h2>
    </div>
    </div>
    
    </div>
     
    )
}

export default Map

