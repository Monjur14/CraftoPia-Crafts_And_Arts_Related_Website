import { useEffect, useState } from "react"
import UseAuth from "../CustomHook/UseAuth"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const MyList = () => {
  const {user} = UseAuth()

  const [allCraftArt, setAllCraftArt] = useState([])
    const [matched, setMatched] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setAllCraftArt(data)
      });
    }, [])

    useEffect(() => {
        const filteredData = allCraftArt.filter((obj) => obj.email === user.email);
        if (filteredData) {
          setMatched(filteredData)
        }
      }, [allCraftArt]);
      
      const sortByCustomizationYes = (data) => {
        return data.sort((a, b) => {
          if (a.customization === "Yes" && b.customization === "No") {
            return -1;
          } else if (a.customization === "No" && b.customization === "Yes") {
            return 1;
          } else {
            return 0;
          }
        });
      };
      const sortByCustomizationNo = (data) => {
        return data.sort((a, b) => {
          if (a.customization === "Yes" && b.customization === "No") {
            return 1; 
          } else if (a.customization === "No" && b.customization === "Yes") {
            return -1; 
          } else {
            return 0;
          }
        });
      };

      const handleSorting = (e) => {
        const sortingValue = e.target.value;
      
        if (sortingValue === "") {
          return matched;
        } else if (sortingValue === "Yes") {
          const sortedData = sortByCustomizationYes(matched);
          setMatched([...sortedData]);
        } else if (sortingValue === "No") {
          const sortedData = sortByCustomizationNo(matched);
          setMatched([...sortedData]);
        }
      }

      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/items/${id}`, {
              method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if (data.deletedCount > 0) {
                // Remove the deleted item from matched state
                const updatedMatched = matched.filter(item => item._id !== id);
                setMatched(updatedMatched);
                // Show success message
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Item has been deleted.",
                  icon: "success"
                });
              }
            })
            .catch(error => {
              console.error("Error deleting item:", error);
              // Show error message
              Swal.fire({
                title: "Error",
                text: "Failed to delete item. Please try again later.",
                icon: "error"
              });
            });
          }
        });
      }

  return (
    <div className="contain">
      <div className="flex justify-center">
        <select name="sorting" id="" className="border text-md p-2 text-white bg-cyan-500 rounded-lg font-semibold cursor-pointer" onChange={handleSorting}>
          <option value="" className="cursor-pointer">Sort by Customization</option>
          <option value="Yes" className="cursor-pointer">Yes</option>
          <option value="No" className="cursor-pointer">No</option>
        </select>
      </div>
      { matched.length > 0 ? <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {matched.map((item) => (
            <div className="w-full border p-2 rounded-md" key={item._id}>
              <img src={item.image} alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">{item.item_name}</h1>
              <h3 className="text-lg font-semibold">Price: {item.price}$</h3>
              <h3 className="text-lg font-semibold">Rating: {item.rating}</h3>
              <h3 className="text-lg font-semibold">Customization: {item.customization}</h3>
              <h3 className="text-lg font-semibold mb-3">Stock Status: {item.stockStatus}</h3>
              <div className="flex gap-5">
                <Link to={`/update/${item._id}`} className="bg-cyan-700 text-white font-semibold text-lg w-full py-1 text-center rounded-md">Update</Link>
                <Link className="bg-cyan-700 text-white font-semibold text-lg w-full py-1 text-center rounded-md" onClick={() => handleDelete(item._id)}>Delete</Link>
              </div>
            </div>
          ))}
        </div> : <div className="h-60 w-full flex justify-center items-center">
                <h1 className="text-xl font-semibold">Sorry No Item Found</h1>
            </div>}
    </div>
  )
}

export default MyList
