import {useState} from "react";
import { data } from "./data";
import Furnitures from "./Furnitures";
import Buttons from "./Buttons";
import './App.css';

function Home () {
  
    const [furnitures, setFurnitures] = useState(data);
  
    const chosenFurnitures = (searchTerm) => {
      const newFurnitures = data.filter(element => element.searchTerm === searchTerm);
      setFurnitures(newFurnitures);
    }
  
    return (<div>
      <div className="cont">
        <h2 className="header">Мебель для Вас</h2>
      </div>
      <Buttons filteredFurnitures={chosenFurnitures}/>
      <Furnitures itemsForSale={furnitures}/>
    </div>
  
    ) 
    
  }

export default Home;