import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Category = () => {
    const [allArt, setAllArt] = useState([])
    const [categorys, setCategorys] = useState([])

    const { category } = useParams()
    useEffect(() => {
        fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setAllArt(data)
      });
    }, [])

    useEffect(() => {
        const filteredData = allArt.filter((obj) => obj.subcategory_Name === category);
        if (filteredData) {
          setCategorys(filteredData)
        }
      }, [allArt, category]);
  return (
    <div className="contain px-2 md:px-3 lg:px-0">
        <h1 className="text-2xl font-bold text-center mt-2">All {category}</h1>
        { categorys.length > 0 ? <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categorys.map((item) => (
            <div className="w-full border p-2 rounded-md" key={item._id}>
              <img src={item.image} alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">{item.item_name}</h1>
              <h1 className="text-lg font-semibold my-2">Subcategory: {item.subcategory_Name}</h1>
              <h1 className="text-sm font-semibold">Short Description: {item.short_description}</h1>
              <h3 className="text-lg font-semibold mt-1">Price: {item.price}$</h3>
              <h1 className="text-lg font-semibold mt-1">Rating: {item.rating}</h1>
              <h1 className="text-lg font-semibold my-1 mb-3">Processing Time: {item.processing_time}</h1>
              <Link to={`/details/${item._id}`} className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md">
                See Details
              </Link>
            </div>
          ))}
        </div> : <div className="h-60 w-full flex justify-center items-center">
                <h1 className="text-xl font-semibold">Sorry No Item Found</h1>
            </div>}
      
    </div>
  )
}

export default Category
