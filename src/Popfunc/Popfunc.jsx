import React from "react";


function Popfunc({
    coffee,
    brand,
    stars,
    review,
    vitesse,
    doors,
    
}) {
    return (
        <div className="shadow-xl h-[400px] w-[256px] p-4 my-10 transition-all duration-300 hover:scale-105 rounded-2xl cursor-pointer flex flex-col justify-between items-center ">
            <div className="hover:scale-110 transition-all hover:skew-x-2 duration-500">
                <img
                    src={coffee}
                    alt={brand}
                    className="object-contain min-h-[104px] min-w-[208px]"
                />
            </div>
            <div className=" flex flex-col justify-between gap-y-5">
                <div className="space-y-5">
                    <div className=" space-y-5 ">
                        <div className="space-y-2">
                            <h1 className="text-sm lg:text-base font-semibold">
                                {brand || ""}
                            </h1>
                            <div className="flex gap-x-2">
                                <LiaStarSolid className="text-yellow-500 text-md" />
                                <div className="flex gap-x-2">
                                    <p className="text-sm">{stars || ""}</p>
                                    <p className="text-sm text-black/50">{`(${review || ""
                                        } reviews)`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between w-full  gap-x-3 text-xs ">
                            {/* firsts stack */}
                            <div className="space-y-2">
                                
                                
                            </div>
                            {/* second stack */}
                            <div className="space-y-2">
                                <div className="flex gap-x-2">
                                   
                                    <span>{vitesse}</span>
                                </div>
                                <div className="flex gap-x-2">
                                   
                                    <span>{`${doors || ""} Doors`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            
        </div>
    );
}

export default Popfunc;
