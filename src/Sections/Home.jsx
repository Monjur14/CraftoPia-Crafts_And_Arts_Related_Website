import { useEffect, useState } from "react";
import Reviews from "../Components/Reviews";
import Slider from "../Components/Slider";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [allCraft, setAllCraft] = useState([]);
  useEffect(() => {
    fetch("https://server-side-rust.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setAllCraft(data);
      });
  }, []);
  const newArr = allCraft.slice(0, 6);

  return (
    <div className="contain px-2 md:px-3 lg:px-0">
      <Slider />
      <div className="mt-10">
        <h1 className="text-4xl font-bold text-center">Craft & Art</h1>
        
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newArr.map((item) => (
            <div className="w-full border p-2 rounded-md" key={item._id}>
              <img src={item.image} alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">{item.item_name}</h1>
              <h3 className="text-lg font-semibold mb-3">Price: {item.price}$</h3>
              <Link to={`/details/${item._id}`} className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md">
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* catagory section */}
      <div>
        <h1 className="text-4xl font-bold text-center">Catagories</h1>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Fade cascade>
          <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/QNnvNXG/painting-7059647-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Landscape Painting</h1>
              <Link to={"/category/Landscape Painting"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/xMZ4Q1h/woman-8695648-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Portrait Drawing</h1>
              <Link to={"/category/Portrait Drawing"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/Tqsdv2c/ai-generated-8702139-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Watercolour Painting</h1>
              <Link to={"/category/Watercolour Painting"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/WVNMkSN/ai-generated-8113445-640.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Oil Painting</h1>
              <Link to={"/category/Oil Painting"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/fFrXdmM/ai-generated-7790635-1280.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Charcoal Sketching</h1>
              <Link to={"/category/Charcoal Sketching"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
            <div className="w-full border p-2 rounded-md">
              <img src='https://i.ibb.co/brhxcRH/baby-3583707-640.jpg' alt="" className="h-56 w-full rounded-md object-cover" />
              <h1 className="text-2xl font-bold my-2">Cartoon Drawing</h1>
              <Link to={"/category/Cartoon Drawing"}><button className="bg-cyan-700 text-white font-semibold text-lg px-6 py-1 rounded-md mt-3">
                View
              </button></Link>
            </div>
          </Fade>
          {/* h2llk */}
          {/* h2llk */}
            
        </div>
      </div>
      <ContactUs />
      <Reviews />
    </div>
  );
};

export default Home;
