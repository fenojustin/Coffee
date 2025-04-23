import Navbar from "../Navbar/Navbar";
import { Star } from "lucide-react";
import logo from '../assets/espresso.png'
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col lg:flex-row justify-between items-center px-10 py-20 bg-[#FFF6EF] relative overflow-hidden">
                {/* Coffee Beans (decorative floating beans) */}
                <div className="absolute w-full h-full pointer-events-none">
                    {/* Tu peux mettre ici une image de grains de café flottants ou des div stylisées */}
                </div>

                {/* Left Side - Text */}
                <div className="max-w-xl z-10" data-aos='zoom-in' data-aos-duration="800">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl  leading-tight text-gray-800">
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
                        <p className="text-orange-500 font-medium cursor-pointer hover:underline">More menu</p>
                    </div>
                </div>

                {/* Right Side - Featured Coffee */}
                <div className="relative z-10 mt-12 lg:mt-0">
                    <div className="bg-gradient-to-tr bg-orange-950 p-6 rounded-full shadow-lg relative">
                        <img
                            src={logo} // Remplace par ta propre image
                            alt="Cappuccino"
                            className="w-52 h-52 object-cover rounded-full"
                        />
                        <div className=" absolute top-4 left-8 border-[4px] border-b-4 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow text-sm font-bold">
                            Cappicuno
                        </div>
                        {/* Rating badge */}
                        <div className=" border-[4px] border-b-4 absolute top-9 right-3 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow font-bold">
                            <span className="text-sm font-semibold">4.8</span>
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        {/* Label */}
                        <div className="border-[4px] border-b-4 absolute bottom-3 left-9 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full shadow text-sm font-bold">
                            18K
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Home;
