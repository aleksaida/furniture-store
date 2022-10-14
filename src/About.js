import { useState } from "react";
import { aboutShop } from "./aboutShop";
import './App.css';

function About() {

    const [text]=useState(aboutShop);
    const [showText, setShowText] = useState(false);
       
    const showTextClick = (element)=> {
      element.showMore=!element.showMore
      setShowText(!showText)
    }
    
    return (
        <div>
    
        <div className="cont">
          <h2 className="header" >О нашем магазине</h2>
        </div>

        {text.map((element=>{
        const {id, description, showMore} = element;

          return(
                <div className="foto"   key={id}>
    
                <div className="cont">
                <p className="aboutText">{ showMore ? description : description.substring(0, 170)}
                <button className="change" onClick={()=>showTextClick(element)}>{showMore ? "Свернуть" : "Развернуть"} </button>
                </p>
              </div>
       
               </div>
             
          )
        }
        
        ))} 
        </div>
   
    )
    
    }
    
    export default About;
    