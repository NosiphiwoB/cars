import React, { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [cars, setCars] = useState({
    carname: "",
    carcolor: ""
  });
  const [showData, setShowData] = useState([])

  useEffect(() => {   
      setTimeout(()=>
    getData(),1000)
    }
  , [])

  const getData = async () => {
    await axios
      .get("http://localhost:4005/cars")
      .then(async (response) => {
      })
      .catch((err) => {
        console.log(err)
      });
    };

  const handleChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value })
  }
  console.log('data',showData)

  const submitButton = e => {
    e.preventDefault();
    var retrieveData = [...showData, cars]

    console.log(cars)
    setShowData(retrieveData)
    console.log('data',showData)
    


  axios.post(`https://localhost:4005/car`, { showData }).then(async(response) => {
    console.log(response)
    console.log(response.data)
    response.data()
  })
  .catch((err)=>{
    console.log(err)
  })
}
  

  return (
  <div>
    <form onSubmit={submitButton}>

      <div>
     <input 
     onChange={handleChange}
     name="carname"
     />
    <select 
    onChange={handleChange}
    name="carcolor"
    >
    <option value="Red">Red</option>
   <option value="Blue">Blue</option>
   <option value="Black">Black</option>
   </select>

   <button>Submit</button>
 </div>

    </form>
   
    <div id="cards" >{showData.map((item) => {
            return(
                <div key={item.id} className="card">
                    <p >{item.carname}</p>
                    <p>{item.carcolor}</p>
                    
</div>
            )
        })}</div>  

  </div>)
}

export default App;