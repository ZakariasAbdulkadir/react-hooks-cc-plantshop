import React, {useState} from "react";

function PlantCard({plant, deletePlant}) {
  const [available,setAvailable] = useState(true)

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {available ? (
        <button className="primary" onClick={()=>setAvailable(!available)}>In Stock</button>
      ) : (
        <button onClick={()=>setAvailable(!available)}>Out of Stock</button>
      )}
      <button className="delete" onClick={() => deletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
