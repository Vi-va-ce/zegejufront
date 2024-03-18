import Signupbar from "./Signupbar";
import Hero from "./SlideShow/Hero";
import React from "react";
import SlideShow from "./SlideShow/SlideShow";
import Footer2 from "./Footer/Footer2";
import home from './SlideShow/home.svg'
import SlideShow2 from "./SlideShow/SlideShow2";
const DefaultPage = () => (
      <div>
            <div className="absolute">
            <img src={home} className="w-full h-full"/>
            </div>
      

      <div>
        
      </div>
      <div className={``}>
            <div className=" absolute ">
      <Signupbar/>
      </div>
      
            <Hero />
            
            <SlideShow/>
            
           
           
            
      </div>

 </div>
     

    

);



export default  DefaultPage ;