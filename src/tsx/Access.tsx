import React from 'react'
import './../assets/css/access.css';
import { Map, MapMarker } from 'react-kakao-maps-sdk';


const Access = () => {
  return (
    <article>
        <Map center={{ lat: 37.519168, lng: 127.031543 }} style={{
            width: "100%",
            height: "400px" 
        }}>
            <MapMarker position={{ lat: 37.519168, lng: 127.031543 }}>
            </MapMarker>
        </Map>
        <div className='access_list'>

        </div>
    </article>
  )
}

export default Access