import { Star, ShoppingCart } from "lucide-react";

const coffeeData = [
    {
        name: "Vanilla Latte",
        price: "21 K",
        rating: 4.8,
    },
    {
        name: "Espresso",
        price: "12 K",
        rating: 4.8,
    },
    {
        name: "Hazelnut Latte",
        price: "23 K",
        rating: 4.8,
        image:
            "https://images.unsplash.com/photo-1525695235007-b650a0c04e0c?auto=format&fit=crop&w=500&q=80",
    },
];
const Popular = () => {
    return (
        <div className="px-10 py-20 bg-orange-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {coffeeData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:scale-105 transition-transform"
                    >
                        {/* Rating */}
                        <div className="flex items-center bg-white w-fit px-2 py-1 rounded-full shadow-sm mb-3">
                            <span className="text-sm font-semibold mr-1">{item.rating}</span>
                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        </div>
                        {/* Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-xl h-40 w-full object-cover mb-4"
                        />
                        {/* Name & Price */}
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="font-semibold text-lg text-gray-800">
                                {item.name}
                            </h2>
                            <p className="font-bold text-orange-500">{item.price}</p>
                        </div>

                        {/* Tags and Cart */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2">
                                <span className="border rounded-xl px-3 py-1 text-sm text-orange-500 border-orange-200">
                                    Hot
                                </span>
                                <span className="border rounded-xl px-3 py-1 text-sm text-orange-500 border-orange-200">
                                    Cold
                                </span>
                            </div>
                            <button className="bg-orange-400 text-white p-2 rounded-full shadow hover:bg-orange-500 transition">
                                <ShoppingCart className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popular;
