import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({SearchPlant}) {
  
  return (
    <ul className="cards">
    {
      SearchPlant.map(card=>{
        return(
          <PlantCard
          image={card.image}
          price={card.price}
          name={card.name}

          />
        )
      })
    }
    
    </ul>
  );
}

export default PlantList;
