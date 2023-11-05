import React from 'react'
import {useState, useEffect} from 'react'
import './../assets/css/main.css'

import Banner01 from './../assets/img/samsung-main-01.jpg';
import Banner02 from './../assets/img/samsung-main-02.jpg';
import Banner03 from './../assets/img/samsung-main-03.jpg';

const Main = () => {

    const [cursor, setCursor] = useState(0);

    useEffect(() => {
        setInterval(()=> {
            setCursor((cursor)=> {
                return cursor+1;
            })
        },4000)
    }, [])
    

    

    return (
        <div className="main-banner">
            <div>
                <img src={Banner01} style={{display:cursor%3 == 0 ? 'inherit' : 'none'}} />
                <img src={Banner02} style={{display:cursor%3 == 1 ? 'inherit' : 'none'}} />
                <img src={Banner03} style={{display:cursor%3 == 2 ? 'inherit' : 'none'}} />
            </div>
        </div>
    )
}

export default Main