import React from 'react';
import "./component.css";

 class Component extends React.Component{
    // fileChangedHandler = (event) => {
    //     const file = event.target.files[0]
    //   }
    //   state = { selectedFile: null }

    //  fileChangedHandler = event => {
    //  this.setState({ selectedFile: event.target.files[0] })}

     
     render(){
         return(
            <div className="box">
                <div className="inputfile">INPUT FILE :<button class="btn-file">Choose File</button></div>
                <div className="output">OUTPUT <span>SHIPS DETECTED </span></div>
                <div className="sizes"></div>
            </div>
         );
     };
 };
 export default Component;