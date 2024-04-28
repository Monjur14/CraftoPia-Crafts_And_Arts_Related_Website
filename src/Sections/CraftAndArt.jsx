import { useEffect, useState } from "react"

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
      <h1>This is Art and Craft Section</h1>
      {
        allItems.map((item) => (
          <h1 key={item._id}>{item.item_name}</h1>
        ))
      }
    </div>
  )
}

export default CraftAndArt
