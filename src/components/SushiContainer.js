import React, {useState, useEffect}from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";



function SushiContainer({API}) {
const [sushiList, setSushiList] = useState([])
const [index, setIndex] = useState(0);
const [sliceEnd, setSliceEnd] = useState(4);


  

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiList(data.slice(index, sliceEnd)))

    },[]
    )

    //------full array of sushi elements


//--------limits diplayed elements to 4
let sliceSize=4;
let indexStart=0;
let sushiToDisplay=[...sushiList]





function handleShowMoreSushi(){
  setIndex(()=>index+1);
  setSliceEnd(()=>sliceEnd+1);
  fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiList(data.slice(index, sliceEnd)))
  
}


  return (
    <div className="belt">
      {sushiList.map((index=>{
  return (
    <Sushi key={index.id} data={index}/>
  )
}))}
      <MoreButton handleShowMoreSushi={handleShowMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
