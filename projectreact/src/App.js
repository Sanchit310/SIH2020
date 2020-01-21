import React from 'react';
import "./App.css";
import Component from "./Component";

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Username"/>
          <input type="password" name="password" class="password form-control" placeholder="password"/>
          <input class="btn login" type="submit" value="Login" />
        </form>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  // constructor(){
  //   super();
  //   this.state = {
  //     showPopup: false,
  //     showCompo:false
  //   };
  
  // }
  // togglePopup(e) {
  //   e.preventDefault();
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }
  state = {
    showPopup: false,
    showCompo:false
  };
  toggle = () =>{
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  
  render(){
    console.log(this.state.showPopup)
    return (
      <div className="App">
  
      <div className="header">
        <div className="heading-content">
          <h4>GOVERNMENT OF INDIA</h4>
        </div>
        <div className="logos">
        <div className="logo1" ><img src={require("../src/images/irso_img.png")} width ="50vw" height="50vh" /></div>
        <div className="logo2"><img src={require("../src/images/sat-logo.png")} width ="50vw" height="50vh" /></div>
        </div>
        <div className="head-right">
          <h4>Department of Space India Space Research Organisation</h4>
        </div>
      </div>
  
      <div className="container-fluid" style={{width:"100%",height:"100%",padding:"0"}}>
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-primary" style={{backgroundColor:"red ",width:"100%",height:"10vh"}}>
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">EXPLORE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">FAQ</a>
        </li>
        <form class="form-inline my-2 my-lg-0">
        <button class="btn btn1  " type="submit" onClick={() => this.toggle()}>REGISTER</button>
        <button class="btn btn2  " type="submit" onClick={() => this.toggle()}>LOGIN</button>
      </form>
      </ul>
     
    </div>
  </nav>
  <div className="middle-box">
    {this.state.showPopup ?  null: <Component/>}  
    <div className="vl">  
  </div> 
  </div>

  
  
        </div> 
        <div className="footer">
          <div className="left-content">CONTACT US:
          <br/>
          Phone: +91 00000000 or 000000000<br/>
          Email:xyz@gmail.com
          </div>
          <div className="right-content">
            Copyright.......All Rights Reserved
          <br/>
          Terms Of Use|Privacy Policy
          
          </div>
          </div>
          {this.state.showPopup ? 
        <Popup          
          closePopup={this.state.toggle}
          handleProp = {this.toggle} 
        />        
        : null
      }
      </div>
    );
  } 
  };  
export default App;
  

