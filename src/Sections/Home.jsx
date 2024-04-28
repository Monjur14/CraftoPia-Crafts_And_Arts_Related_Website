import Reviews from "../Components/Reviews"
import Slider from "../Components/Slider"
import ContactUs from "./ContactUs"

const Home = () => {
  return ( 
    <div className="contain">
        <Slider/>
        <ContactUs/>
        <Reviews/>    
    </div>
  )
}

export default Home
