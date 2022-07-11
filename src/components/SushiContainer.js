import React, {useState, useEffect}from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";



function SushiContainer({API, handleSale, plates}) {
const [sushiList, setSushiList] = useState([])
const [index, setIndex] = useState(0);
const [sliceEnd, setSliceEnd] = useState(4);


  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiList(data.slice(index, sliceEnd)))

    },[index]
    )


function handleShowMoreSushi(){
  setIndex(index+1);
  setSliceEnd(sliceEnd+1);
}


  return (
    <div className="belt">
      {sushiList.map((index=>{
  return (
    <Sushi key={index.id} data={index} handleSale={handleSale} plates={plates} />
  )
  }))}
      <MoreButton handleShowMoreSushi={handleShowMoreSushi}/>
    </div>
  );
}

export default SushiContainer;