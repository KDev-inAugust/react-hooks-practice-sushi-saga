import React, {useState, useEffect}from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";



function SushiContainer({API}) {
const [sushiList, setSushiList] = useState([])
const [displayedSushi, setDisplayedSushi] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiList(data))
    },[]
    )

    //------full array of sushi elements
const arrayOfSushiElements = sushiList.map((index=>{
  return (
    <Sushi key={index.id} data={index}/>
  )
}))

//--------limits diplayed elements to 4
let sliceSize=4;
let indexStart=0;
let fourSushi = [...arrayOfSushiElements].slice(indexStart, sliceSize)

function handleShowMoreSushi(data){
  console.log(data);
}


  return (
    <div className="belt">
      {fourSushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
