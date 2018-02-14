import React from 'react'

import Map from './map'
import User from './user'

export default class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }

    this.getUserData()
  }

  getUserData() {
    return fetch('http://localhost:3000/user')
             .then((response) => {
               response.json().then((res) => {
                 this.setState({user: res})
               })
             })
  }

  render() {
    return(
      <div className='top'>
        <Map />
      </div>
    )
  }
}
