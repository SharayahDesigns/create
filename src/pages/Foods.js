import { useContext, useState } from "react"
import {DataContext} from "../providers/DataProvider"


const Foods = ()=>{
  const {getFoods,foodsDev,addFood} = useContext(DataContext)
  const [name,setName] = useState('')
  const [price, setPrice] = useState('')
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    addFood({name,price})
  }
    return (
        <div>
            <h1>Foods Page</h1>
        <button onClick={getFoods}>Get Foods</button>
        <h1>Foods From Development data</h1>
        <p>{JSON.stringify(foodsDev)}</p>
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input value={name} onChange={(e) => setName(e.target.value)}></input>
          <p>Price</p>
          <input value={price} onChange={(e)=> setPrice(e.target.value)}></input>
        <button>Add</button>
        </form>
            
        </div>
    )
}

export default Foods
