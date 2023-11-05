import React from 'react'
import './../assets/css/introduceCompany.css'
const IntroduceCompany = () => {
  return (
    <article id="1">
                <div>
                    <div className="inner-message">
                        <p>회사 소개</p>
                        <h2>푸에르푸엘라와 함께</h2>
                        <h2>성장해나가는 스마트한 솔루션</h2>
                    </div>
                    <div className="inner-img">
                        <img src="./img/article01.jpg"/>
                    </div>
                    <div className="desc">
                        <p>푸에르푸엘라는 고객과 함께 성장해나가는 일류기업을 목표로 합니다. </p>
                        <p>품질과 신뢰를 제일의 가치로 삼고 좋은 사람과 좋은 기술을 바탕으로 고가치의 품질을 생산하고, 고객님과의 신뢰관계를 유지하는데 힘쓰겠습니다.</p>
                        <p>저희 푸에르푸엘라는 아래의 3가지 핵심가치를 내재화하여 지속적인 성장과 미래방향성을 제시하겠습니다.</p>
                        
                    </div>
                    <div className="card_list">
                        <div className="sub_card">
                            <img src="./img/banner_01.png"/>
                            <div>
                                <p>고객과 개발자의 신뢰</p>
                            </div>
                        </div>
                        <div className="sub_card">
                            <img src="./img/banner_02.png"/>
                            <div>
                                <p>고객의 만족이 곧 품질</p>
                            </div>
                        </div>
                        <div className="sub_card">
                            <img src="./img/banner_03.png"/>
                            <div>
                                <p>고객과 함께 성장하는 회사</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </article>
  )
}

export default IntroduceCompany