import React ,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";



function App() {

 

  const [plates, setPlates] = useState([])
  

  //------------handle the tally of plates with thier amoounts into an array that is given to table
  const plateArr=[...plates,];

  let creditRemaining=30

  
  function handleSale(sale){
    if((plates.reduce((a,b)=>a+b,0)+sale)<=30){
      plateArr.push(sale);
      setPlates(plateArr)
      console.log('app sale')
      
    }
   
  }
  
  return (
    <div className="app">
      <SushiContainer API={API} handleSale={handleSale} plates={plates} />
      <Table plates={plates} creditRemaining={creditRemaining} />
    </div>
  );
}

export default App;