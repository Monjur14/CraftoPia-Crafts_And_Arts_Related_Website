import { useEffect, useState } from "react";
import Reviews from "../Components/Reviews";
import Slider from "../Components/Slider";
import ContactUs from "./ContactUs";

const Home = () => {
  const [allCraft, setAllCraft] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setAllCraft(data);
      });
  }, []);
  const newArr = allCraft.slice(0, 6);

  return (
    <div className="contain">
      <Slider />
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">Craft & Art</h1>
        <div className="my-10 grid grid-cols-3 gap-5">
          {newArr.map((item) => (
            <div className="w-full border p-2 rounded-md" key={item._id}>
              <img src={item.image} alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">{item.item_name}</h1>
              <h3 className="text-lg font-semibold">Price: {item.price}$</h3>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* catagory section */}
      <div>
        <h1 className="text-4xl font-bold text-center">Catagories</h1>
        <div className="my-10 grid grid-cols-3 gap-5">
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/QNnvNXG/painting-7059647-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Landscape Painting</h1>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/xMZ4Q1h/woman-8695648-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Portrait Drawing</h1>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/Tqsdv2c/ai-generated-8702139-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Watercolour Painting</h1>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/WVNMkSN/ai-generated-8113445-640.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Oil Painting</h1>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/WVNMkSN/ai-generated-8113445-640.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Charcoal Sketching</h1>
              <button className="bg-blue-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button>
            </div>
        </div>
      </div>
      <ContactUs />
      <Reviews />
    </div>
  );
};

export default Home;
