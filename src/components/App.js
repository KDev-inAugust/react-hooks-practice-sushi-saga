import React ,{useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [plates, setPlates] = useState([])

  //------------handle the tally of plates with thier amoounts into an array that is given to table
  const plateArr=[...plates,];

  function handleSale(sale){
    plateArr.push(sale)
    console.log("in app", sale);
    setPlates(plateArr)
  }
  
  
  return (
    <div className="app">
      <SushiContainer API={API} handleSale={handleSale}/>
      <Table plates={plates}/>
    </div>
  );
}

export default App;
