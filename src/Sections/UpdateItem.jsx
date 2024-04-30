import { useParams } from "react-router-dom"
import UseAuth from "../CustomHook/UseAuth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
const UpdateItem = () => {
    const [all, setAll] = useState(null)
    const {user} = UseAuth()
    const {id} = useParams()
    const handleUpdate = (e) => {
        e.preventDefault();
    
        const form = e.target;
        const image = form.image.value;
        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const short_description = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processing_time = form.processing_time.value;
        const stockStatus = form.stockStatus.value;
    
        const updatedItem = {
            image,
            item_name,
            subcategory_Name,
            short_description,
            price,
            rating,
            customization,
            processing_time,
            stockStatus
        };
    
        fetch(`http://localhost:5000/items/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem) // Corrected: Stringify the body
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success("Successfully Updated");
                setAll(data);
            } else {
                toast.error("No changes made or item not found")
            }
        })
        .catch(error => console.error("Error updating item:", error));
    };

    console.log(all)
  return (
    <div className="contain px-2 md:px-3 lg:px-0">
        <h1 className="text-4xl font-bold text-center mt-5">Update Craft Items</h1>
        <form className="mt-6" onSubmit={handleUpdate}>

            <div className="flex gap-5 flex-col md:flex-row">
                <div className="w-full">
                    <label htmlFor="image" className="text-lg font-bold cursor-pointer">Image</label>
                    <input type="url" id="image" name="image" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="item_name" className="text-lg font-bold cursor-pointer">Name</label>
                    <input type="text" name="item_name" id="item_name" className="border border-gray-500 text-lg p-2 rounded-md w-full" />
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <div className="w-full flex flex-col">
                    <label htmlFor="subcategory_Name" className="text-lg font-bold cursor-pointer">Subcategory</label>
                    <select id="subcategory_Name" name="subcategory_Name" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Enter the Subcategory</option>
                        <option value="Landscape Painting">Landscape Painting</option>
                        <option value="Portrait Drawing">Portrait Drawing</option>
                        <option value="Watercolour Painting">Watercolour Painting</option>
                        <option value="Oil Painting">Oil Painting</option>
                        <option value="Charcoal Sketching">Charcoal Sketching</option>
                        <option value="Cartoon Drawing">Cartoon Drawing</option>
                    </select>
                </div>  
                <div className="w-full">
                    <label htmlFor="short_description" className="text-lg font-bold cursor-pointer">Short Description</label>
                    <input type="text" name="short_description" id="short_description" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
                <div className="w-full">
                    <label htmlFor="price" className="text-lg font-bold cursor-pointer">Price</label>
                    <input type="number" name="price" id="price" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full flex flex-col">
                    <label htmlFor="rating" className="text-lg font-bold cursor-pointer">Rating</label>
                    <select id="rating" name="rating" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Give Your Rating</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
            <div className="w-full flex flex-col">
                    <label htmlFor="customization" className="text-lg font-bold cursor-pointer">Customization</label>
                    <select id="customization" name="customization" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Yes/No</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>   
                <div className="w-full">
                    <label htmlFor="processing_time" className="text-lg font-bold cursor-pointer">Processing Time</label>
                    <input type="text" name="processing_time" id="processing_time" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5 flex-col md:flex-row">
            <div className="w-full flex flex-col">
                    <label htmlFor="stockStatus" className="text-lg font-bold cursor-pointer">Stock Status</label>
                    <select id="stockStatus" name="stockStatus" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Give the Status</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>             
            </div>

            <div className="mt-5 mb-10 w-full flex justify-center">
            <button type="submit"  className="bg-cyan-700 text-white font-semibold text-xl px-8 py-2 rounded-md">Update Item</button>
            </div>
        </form>
        <ToastContainer />
    </div>
  )
}

export default UpdateItem
