import React from 'react' 
import image from '../assets/espresso.png'
import image1 from '../assets/4.png'
function Popular() {
    const dataimage = [
        {
            coffee: image,
            brand: "Jaguar XE L P250",
            stars: "4.8",
            review: "2.436",
            passagers: "4",
            vitesse: "Auto",
            doors: "4",
            conditioning: "Air Conditioning",
            price: "1.800",
        },
        {
            coffee: image1,
            brand: "Jaguar XE L P250",
            stars: "4.8",
            review: "2.436",
            passagers: "4",
            vitesse: "Auto",
            doors: "4",
            conditioning: "Air Conditioning",
            price: "1.800",
        },
    ];

    const Popular = () => {
        return (
            <div className=''>
                <div className='container'>
                    <div className='bg-orange-200 w-[1000px] h-[300px] rounded-[80px] flex justify-center items-center'>
                        {/* Services Card section  */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
                            {dataimage.map((coffee, index) => (
                                <div
                                    data-aos={index < 2 ? "zoom-in-right" : "zoom-in-left"}
                                    data-aos-duration="500"
                                >
                                    <PopularCars key={index} {...coffee} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Popular;