import React from 'react'
import './../assets/css/header.css';
import { CiMail } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

const Header = () => {
  return (
    <header>
        <div>
            <div className="logo p-2"><a href="/">PUERPUELLA STUDIO</a></div>
            <div className='flex flex-row space-x-2'>
                <div className='flex flex-row items-center justify-center cursor-pointer'>
                    <CiLogin size={20}/>
                    <p>로그인</p>
                </div>
                <div className='flex flex-row items-center justify-center cursor-pointer'>
                    <CiMail size={20}/>
                    <p>문의하기</p>
                </div>
            </div>
            {/* <div className="head_fnc">
                <div className="search-box">
                    <ul>
                        <li>1. 모바일</li>
                        <li>2. 가전제품</li>
                        <li>3. 소모품</li>
                    </ul>
                    <button type="button" className="search_button">
                        <img loading="lazy" src="./img/search.svg" alt="검색 아이콘"/>
                    </button>
                </div>
                <div>My page</div>
                <div>Login</div>
            </div> */}

        </div>
    </header>
  )
}

export default Header;