import logo from '../assets/1.png'
const AboutUs = () => {
    return (
        <section className="bg-[#FAEBD9] py-20 px-8" id="about"data-aos='zoom-in'  data-aos-duration='3000'>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Image */}
                <div className="flex-1">
                    <img
                        src={logo}
                        alt="Coffee cup"
                        className="rounded-xl shadow-lg w-[] max-w-md mx-auto"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        About <span className="underline decoration-orange-400">us</span>
                    </h2>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        We provide quality coffee,<br />
                        and ready to deliver.
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-md">
                        We are a company that makes and distributes delicious drinks. Our main product is made
                        with a secret recipe and available in stores worldwide.
                    </p>
                    <button className="bg-orange-950 text-white px-6 py-3 rounded-full shadow hover:bg-orange-800 transition">
                        Get your coffee
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
