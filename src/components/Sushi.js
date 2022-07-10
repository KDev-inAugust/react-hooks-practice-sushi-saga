import React, {useState} from "react";

function Sushi({data}) {
const [eatenSushi, setEaten] = useState(true)

  
  function handlePlateClick(){
    setEaten(!eatenSushi)
  }

const {id, name, img_url, price, created_at}=data
  return (
    <div className="sushi"  >
      <div className="plate" onClick={handlePlateClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eatenSushi===false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
