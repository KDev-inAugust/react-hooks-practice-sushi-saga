import React from "react";

function Table({ plates = [], creditRemaining}) {
  

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  //-------subtract the price of yummy sushi eaten from credit
console.log('plates in table', plates)

let tallyDollarAmount = plates.reduce((a,b)=>a+b,0);


function creditBalance () {
  
  if (creditRemaining-tallyDollarAmount>0){
  creditRemaining=creditRemaining - tallyDollarAmount;
  return creditRemaining
}
else creditRemaining= 0;}

creditBalance();




  return (
    <>
      <h1 className="remaining">
        You have: ${creditRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
