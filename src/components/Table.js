import React from "react";

function Table({ plates = [], credit}) {
  

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  //-------subtract the price of yummy sushi eaten from credit
console.log('plates in table', plates)

let tallyDollarAmount = plates.reduce((a,b)=>a+b,0);


function creditBalance () {
  
  if (credit-tallyDollarAmount>0){
  credit=credit- tallyDollarAmount;
  return credit
}
else credit= 0;}

creditBalance();




  return (
    <>
      <h1 className="remaining">
        You have: ${credit} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;