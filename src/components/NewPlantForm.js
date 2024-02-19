import React, { useState } from "react";

function NewPlantForm() {
  const [formInput, setFormInput]=useState({
    name:"",
    image:"",
    price:0
  })

  function handleChange(e){
    const {name,value}=e.target
setFormInput({...formInput,[name]:value})
  }

  function handleSubmit(e){
    e.preventDefault()
const input=formInput
    const AddPlant={
      name:input.name,
      image:input.image,
      price:input.price
    }
    fetch('http://localhost:6001/plants',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(AddPlant)
      }
    
    ).then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={formInput.name} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} value={formInput.image} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} value={formInput.price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
