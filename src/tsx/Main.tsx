import React from 'react';
import './../assets/css/main.css';
import MainProduction from './components/MainProduction';

const Main = () => {
    return (
        <div>
            <div className="main-container">
                <p>당신의 세상을 더 스마트하게</p>
                <p>푸에르푸엘라 스튜디오 입니다.</p>
            </div>
            <MainProduction />
        </div>
    );
};

export default Main;