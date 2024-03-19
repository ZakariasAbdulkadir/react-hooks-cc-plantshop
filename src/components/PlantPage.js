import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants,setPlants] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(data=>{
      setPlants(data)
    })
  },[])

  function addPlant(newPlant){
    fetch('http://localhost:6001/plants',{
      method:"POST",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>{
      const newPlants = [...plants, data]
      setPlants(newPlants)
    })
  } 

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"DELETE"
    })
    .then(r=>r.json())
    .then(data=>{
      fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(data=>{
        setPlants(data)
      })
    })
  }

  function editPlant(plant, id){
    fetch(`http://localhost:6001/plants/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(plant)
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(data=>{
        console.log(data)
        setPlants(data)
      })
    })
  } 
  
  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search setSearch={setSearch} />
      <PlantList search={search} plants={plants} deletePlant={deletePlant} editPlant={editPlant} />
    </main>
  );
}

export default PlantPage;
