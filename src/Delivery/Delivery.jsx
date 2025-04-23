import cup from '../assets/cup.png'
const DeliverySteps = () => {
    return (
        <>
            <section className="bg-white py-20 px-8 text-center" id="delivery" data-aos="fade-up"
                data-aos-duration="3000">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-16">
                How to use delivery <span className="text-orange-500 underline decoration-orange-300 decoration-4">service</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Step 1 */}
                <div className="flex flex-col items-center space-y-4">
                    <img
                        src={cup}
                        alt="Choose your coffee"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">choose your coffee</h3>
                    <p className="text-sm text-gray-600">there are 20+ coffees for you</p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center space-y-4">
                    <img
                            src={cup}
                        alt="Delivery"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">we delivery it to you</h3>
                    <p className="text-sm text-gray-600">Choose delivery service</p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center space-y-4">
                    <img
                            src={cup}
                        alt="Enjoy your coffee"
                        className="w-20 h-20"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">Enjoy your coffee</h3>
                    <p className="text-sm text-gray-600">Choose delivery service</p>
                </div>
            </div>
            </section>
        </>
    );
};

export default DeliverySteps;
