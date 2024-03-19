import React, {useState} from "react";

function PlantCard({plant, deletePlant, editPlant}) {
  const [available,setAvailable] = useState(true)
  const [price, setPrice] = useState(plant.price)

  const [editing, setEditing] = useState(false)

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>

      {editing ? 
        (<input type="text" name="price" placeholder={price} onChange={(e)=>{
        setPrice(e.target.value)
      }} />)
      :
      (<></>)
      }
      
      {available ? (
        <button className="primary" onClick={()=>setAvailable(!available)}>In Stock</button>
      ) : (
        <button onClick={()=>setAvailable(!available)}>Out of Stock</button>
      )}
      <button className="delete" onClick={() => deletePlant(plant.id)}>Delete</button>
      <button className="edit" onClick={() => {
        if (!editing) {
          setEditing(true)
        } else {
          setEditing(false)
          const editedPlant = {
            name: plant.name,
            image: plant.image,
            price: price,
          }
          editPlant(editedPlant, plant.id)
        }
      }}>{!editing ? "Edit" : "Submit Price"}</button>
    </li>
  );
}

export default PlantCard;
