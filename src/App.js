import React, { Component } from 'react'
import './App.css'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      url: "",
    }
  }

  render() {
    if(this.state.url===''){
      return (
        <div>
          <div class="main">
            <center>
              <h1 style={{fontFamily: 'Raleway', fontSize: 50}}>QR Generator</h1>
            </center>
            <div class="contentDiv">
              <div class="contentInputDiv">
                <h2 style={{marginLeft: 30, fontFamily: 'Raleway', fontSize: 30}}>Get QR for your URL</h2>
                <input style={{marginLeft: 30, marginTop: 10}} type="text" placeholder="Enter Your URL" onChange={
                    url => {
                      this.setState({url: url.target.value
                    })}
                  }/>
                <h4 style={{marginLeft: 30}} onClick={() => {
                  if(this.state.url===''){
                    window.alert("Enter URL")
                  } else {
                    this.setState({showQR: true})
                  }
                }}>Submit</h4>
              </div>
              <div class="contentOutputDiv">
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div class="main">
            <center>
              <h1 style={{fontFamily: 'Raleway', fontSize: 50}}>QR Generator</h1>
            </center>
            <div class="contentDiv">
              <div class="contentInputDiv">
                <h2 style={{marginLeft: 30, fontFamily: 'Raleway', fontSize: 30}}>Get QR for your URL</h2>
                <input style={{marginLeft: 30, marginTop: 10}} type="text" placeholder="Enter Your URL" onChange={
                  url=>{this.setState({url: url.target.value})}
                  }/>
                <h4 style={{marginLeft: 30}} onClick={() => {
                  if(this.state.url===''){
                    window.alert("Enter URL")
                  } else {
                    this.setState({showQR: true})
                  }
                }}>Submit</h4>
              </div>
              <div class="contentOutputDiv">
                <img src={"https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" + this.state.url} alt="Your QR Code"/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}
