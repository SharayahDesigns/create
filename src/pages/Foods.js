import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
const Foods = ()=>{
    const {getFoods, foodsDev} = useContext(DataContext)
    return (
        <div>
            <h1>Foods Page</h1>
        <button onClick={getFoods}>Get Foods</button>
        <h1>Foods From Development data</h1>
        <p>{JSON.stringify(foodsDev)}</p>
            
        </div>
    )
}

export default Foods
