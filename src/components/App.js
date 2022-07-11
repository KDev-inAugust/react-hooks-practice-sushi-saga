import React ,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {

 

  const [plates, setPlates] = useState([])
  

  //------------handle the tally of plates with thier amoounts into an array that is given to table
  const plateArr=[...plates,];

  let credit=50

  
  function handleSale(sale){
    if((plates.reduce((a,b)=>a+b,0)+sale)<=credit){
      plateArr.push(sale);
      setPlates(plateArr)
      console.log('app sale')
      
    }
   
  }
  
  return (
    <div className="app">
      <SushiContainer API={API} handleSale={handleSale} plates={plates} credit={credit} />
      <Table plates={plates} credit={credit} />
    </div>
  );
}

export default App;