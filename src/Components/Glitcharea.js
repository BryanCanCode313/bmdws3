import React from 'react';
import '../CSS/glitchlanding.css';
import bmdimg from "../img/bmd-word-2.png";
import bmdsymbol from "../img/BMD Logo.png";


class Glitcharea extends React.Component { 

      componentDidMount() {

        const script = document.createElement("script");
        script.src = "../JS/main.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
      
        document.body.appendChild(script);

      }


          render() {
            return ( 
                <div className="titlebox" id="tbox">
                        <img className="bmdlogo" id="bmdl" src={bmdimg} alt="true" />
                        <img className="bmdsymbol" src={bmdsymbol} alt="true"/>
                </div> 
            );
        } 
        
        scriptLoaded(){
            console.log("its loaded");
        }
    }

export default Glitcharea;