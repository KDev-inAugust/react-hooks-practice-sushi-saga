import React, {useState, useEffect}from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";



function SushiContainer({API}) {
const [sushiList, setSushiList] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(res=>res.json())
    .then(data=>setSushiList(data))
    },[]
    )

  return (
    <div className="belt">
      {sushiList.map((index=>{
        return (
          <Sushi key={index.id} data={index}/>
        )
      }))}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
