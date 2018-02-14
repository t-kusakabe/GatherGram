import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route } from 'react-router-dom'

// Components
import Header from './components/layouts/header'
import Sidebar from './components/layouts/sidebar'
import Tops from './components/tops/tops'
import Rankings from './components/rankings/rankings'
import PrivacyPolicy from './components/privacy_policy/privacy_policy'

//(() =>  { 
//  fetch('http://localhost:3000/user/get_gather',{})
//    .then((response) => {
//    })
//})()

const App = () => (
  <HashRouter basename="/">
    <div>
      <Header />

      <div className='l-contents'>
        <Route exact path='/' component={Tops} />
        <Route path='/rankings' component={Rankings} />
        <Route path='/user' component={Tops} />
        <Route path='/privacy_policy' component={PrivacyPolicy} />
      </div>
    </div>
  </HashRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
