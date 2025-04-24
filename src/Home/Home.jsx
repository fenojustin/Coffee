import Navbar from "../Navbar/Navbar";
import { Star } from "lucide-react";
import logo from '../assets/3.png'
import Popular from "../Popular/Popular";
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-20  relative overflow-hidden bg-orange-50">
                {/* Coffee Beans (decorative floating beans) */}
                
                <div className="absolute w-full h-full pointer-events-none">
                   
                    {/* Tu peux mettre ici une image de grains de café flottants ou des div stylisées */}
                </div>

                {/* Left Side - Text */}
                <div className="max-w-xl z-10" data-aos='zoom-in' data-aos-duration="800">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl  leading-tight text-gray-800 font-semibold">
                        Enjoy your <span className="text-orange-500">coffee</span><br />
                        before your activity
                    </h1>
                    <p className="text-lg text-gray-600 mt-4 mb-8">
                        Boost your productivity and build your mood<br />
                        with a glass of coffee in the morning
                    </p>
                    <div className="flex items-center gap-6">
                        <button className="bg-orange-950 text-white rounded-full py-3 px-10 shadow-md hover:bg-orange-800 transition">
                            Order now
                        </button>
                        <p className="text-orange-500 font-semibold cursor-pointer hover:underline">More menu</p>
                   
                    </div>
                    <h1 className="font-bold mt-20 text-2xl">Popular <span className="underline decoration-orange-400 decoration-4">Now</span> </h1>
                </div>

                {/* Right Side - Featured Coffee */}
                <div className="relative z-10 mt-12 lg:mt-0">
                    <div className="bg-gradient-to-tr bg-orange-950 p-6 w-[340px] h-[340px] rounded-full  relative">
                        <img
                            src={logo} // Remplace par ta propre image
                            alt="Cappuccino"
                            className="object-cover w-200 rounded-full flex justify-center items-center"
                        />
                        <div className=" absolute top-4 left-8 border-[6px] border-b- transform -translate-x-1/2 bg-white px-12 py-2 rounded-full shadow sm:text-3xl  font-bold">
                            Cappiccuno
                        </div>
                        {/* Rating badge */}
                        <div className=" border-[6px] border-b-4 absolute top-[55px] right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow ">
                            <span className="sm:text-3xl font-bold">4.8</span>
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        {/* Label */}
                        <div className="border-[6px] border-b-4 absolute bottom-3 left-16 transform -translate-x-1/2 bg-white px-10 py-2 rounded-full shadow sm:text-3xl font-bold">
                            18K
                        </div>
                    </div>
                  
                </div>
                <Popular/>
            </div>
        </>
    );
};

export default Home;
