import React from "react";
import PlantCard from "./PlantCard";

function PlantList({search, plants, deletePlant, editPlant}) {

  const filteredPlants = plants.filter((plant)=>{
    return plant.name.toLowerCase().includes(search.toLowerCase())
  })

  const plantCards = filteredPlants.map((plant)=>{
    return <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} editPlant={editPlant} />
  })

  return (
    <ul className="cards">{/* render PlantCards components in here */
      plantCards
    }</ul>
  );
}

export default PlantList;
