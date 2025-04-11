import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './tsx/Header'
import './App.css'
import Main from './tsx/Main'
import Navigator from './tsx/Navigator'
import IntroduceCompany from './tsx/IntroduceCompany'
import IntroducePerson from './tsx/IntroducePerson'
import IntroduceWork from './tsx/IntroduceWork'
import Access from './tsx/Access'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className='my-16'>
          <Routes>
            <Route path='/' Component={Main}/>
            <Route path='/intro_company' Component={IntroduceCompany}/>
            <Route path='/intro_work' Component={IntroduceWork}/>
            <Route path='/intro_person' Component={IntroducePerson}/>
            <Route path='/access' Component={Access}/>
          </Routes>
        </div>
        <Navigator/>
      </BrowserRouter>
    </>
  )
}

export default App
