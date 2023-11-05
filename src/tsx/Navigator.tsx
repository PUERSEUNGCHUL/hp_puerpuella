import React from 'react'
import './../assets/css/navigator.css'
import {Link} from 'react-router-dom'

const Navigator = () => {
  return (
    <div className="head_menu">
        <ul>
            <li><Link to="/intro_company">회사 소개</Link></li>
            <li><Link to="/intro_person">개발자 이력</Link></li>
            <li><Link to="/intro_work">사업 안내</Link></li>
            <li><Link to="/access">찾아오시는 길</Link></li>
            <li><Link to="#4">제작의뢰</Link></li>
        </ul>
    </div> 
  )
}

export default Navigator