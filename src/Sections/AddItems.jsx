const AddItems = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        alert(form.item_name.value)
    }

  return (
    <div className="contain">
        <h1 className="text-4xl font-bold text-center mt-5">Add Craft Items</h1>
        <form className="mt-6" onSubmit={handleSubmit}>

            <div className="flex gap-5">
                <div className="w-full">
                    <label htmlFor="image" className="text-lg font-bold cursor-pointer">Image</label>
                    <input type="url" id="image" name="image" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="item_name" className="text-lg font-bold cursor-pointer">Name</label>
                    <input type="text" name="item_name" id="item_name" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5">
                <div className="w-full">
                    <label htmlFor="subcategory_Name" className="text-lg font-bold cursor-pointer">Subcategory Name</label>
                    <input type="text" name="subcategory_Name" id="subcategory_Name" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="short description" className="text-lg font-bold cursor-pointer">Short Description</label>
                    <input type="text" name="short description" id="short description" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="flex gap-5 mt-5">
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

            <div className="flex gap-5 mt-5">
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

            <div className="flex gap-5 mt-5">
            <div className="w-full flex flex-col">
                    <label htmlFor="stockStatus" className="text-lg font-bold cursor-pointer">Customization</label>
                    <select id="stockStatus" name="stockStatus" className="border border-gray-500 text-lg p-2 rounded-md w-full">
                        <option value="">Give the Status</option>
                        <option value="In Stock">In Stock</option>
                        <option value="Made to Order">Made to Order</option>
                    </select>
                </div>             
            </div>

            <div className="flex gap-5 mt-5">
                <div className="w-full">
                    <label htmlFor="email" className="text-lg font-bold cursor-pointer">Your Email</label>
                    <input type="email" name="email" id="email" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>
                <div className="w-full">
                    <label htmlFor="user_name" className="text-lg font-bold cursor-pointer">Your Name</label>
                    <input type="text" name="user_name" id="user_name" className="border border-gray-500 text-lg p-2 rounded-md w-full"/>
                </div>                
            </div>

            <div className="mt-5 mb-10 w-full flex justify-center">
            <button type="submit"  className="bg-blue-700 text-white font-semibold text-xl px-8 py-2 rounded-md hidden lg:block">Add Item</button>
            </div>
        </form>
    </div>
  );
};

export default AddItems;
