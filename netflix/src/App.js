import React, { Component } from 'react'
import Row from './Row';
import requests from './requests';


export default class App extends Component {
  render() {
    return (
      <div>
        <Row title="Netfilix Originals" fetchUrl = {requests.fetchNetflixOriginals} />
        <Row title="Trending Now" fetchUrl = {requests.fetchTrending} />
        
      </div>
    )
  }
}
