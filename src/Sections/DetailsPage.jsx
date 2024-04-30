import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();

  const [allCraft, setAllCraft] = useState([]);
  const [single, setSingle] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setAllCraft(data);
      });
  }, []);

  useEffect(() => {
    const singleData = allCraft.find((obj) => obj._id === id);
    if (singleData) {
      setSingle(singleData);
    }
  }, [allCraft, id]);

  return (
    <div className="contain px-2 md:px-3 lg:px-0">
      <div className="flex flex-col lg:flex-row my-3 lg:mt-10 gap-5">
        <div className="basis-1/2">
          {single && <img src={single.image} alt="" className="object-cover h-96 w-full" />}
        </div>
        <div className="basis-1/2 text-xl font-bold space-y-2">
            {single && (
              <>
                <h1>Name: {single.item_name}</h1>
                <h1>Price: {single.price}$</h1>
                <h1>Rating: {single.rating}</h1>
                <h1>Subcategory Name: {single.subcategory_Name}</h1>
                <h1>Short Description: {single.short_description}</h1>
                <h1>Customization: {single.customization}</h1>
                <h1>Processing Time: {single.processing_time}</h1>
                <h1>Stock Status: {single.stockStatus}</h1>
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
