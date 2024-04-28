import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CraftAndArt = () => {

  const [allItems, setAllItems] = useState([])


  useEffect(() => {
    fetch("http://localhost:5000/items")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAllItems(data)
    })
  }, [])

  return (
    <div className="contain">
     <div className="my-10 grid grid-cols-3 gap-5">
     {/* <div className="w-full border p-2 rounded-md">
      <img src={`https://i.ibb.co/b6LBTGS/ai-generated-8659118-640.jpg`} alt=""  className="h-56 w-full rounded-md"/>
      <h1 className="text-2xl font-bold my-2">Farm Agriculture</h1>
      <h3 className="text-lg font-semibold">Price: 99$</h3>
      <button type="submit"  className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">See Details</button>
     </div> */}
     {
      allItems.map((item) => (
        <div className="w-full border p-2 rounded-md" key={item._id}>
      <img src={item.image} alt=""  className="h-56 w-full rounded-md"/>
      <h1 className="text-2xl font-bold my-2">{item.item_name}</h1>
      <h3 className="text-lg font-semibold mb-3">Price: {item.price}$</h3>
      <Link to={`/details/${item._id}`}  className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md">See Details</Link>
     </div>
      ))
     }
     </div>      
    </div>
  )
}

export default CraftAndArt
