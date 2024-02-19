import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useEffect, useState } from "react";

function PlantPage() {
  const [cards, setCards]=useState([])
   const [input, setInput]=useState('')

   function handleChange(e){
setInput(e.target.value)
   }
   const SearchPlant=cards.filter(card=>{
    const value=input===""|| card.name.toUpperCase().includes(input.toUpperCase())
    return value
   })
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(res=>res.json())
    .then(data=>setCards(data))
  },[])
  return (
    <main>
      <NewPlantForm />
      <Search value={input} handleChange={handleChange} />
      <PlantList SearchPlant={SearchPlant} />
    </main>
  );
}

export default PlantPage;
