import { useState } from "react";
import './App.css';
import { rooms } from "./rooms";


function Slides(){
const [foto, setFoto]= useState(0);
    const {fact, image}= rooms[foto];

    const previousRoom=()=>{
        setFoto((foto=>{
            foto --;
            if (foto<0){
                return rooms.length-1
            }
            return foto
        }))
    }

    const nextRoom =()=>{
        setFoto((foto=>{
            foto++;
            if(foto>rooms.length-1){
                foto=0;
            }
            return foto;
        }))
    }
    return(
    
        <div>
        <div className="cont">
        <p className="text">{ fact }</p>
        </div>
        <div className="cont">
            <button className="change" onClick={previousRoom}>Предыдущий</button>
            <button  className="change" onClick={nextRoom}>Следующий</button>
        </div>
        <div className="cont">
        <img src={ image } width="500px" height="370px" alt="foto"></img>
        </div>
        

    </div>)
}

export default Slides;