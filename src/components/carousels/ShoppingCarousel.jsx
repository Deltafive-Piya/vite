"use client";

import { Carousel } from "flowbite-react";
import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Shopping_1 from '../../assets/BStoddardPhotos/Shopping/Shopping_1.png';
import Shopping_2 from '../../assets/BStoddardPhotos/Shopping/Shopping_2.png';
import Shopping_3 from '../../assets/BStoddardPhotos/Shopping/Shopping_3.png';


export function ShoppingCarousel() {
    return (
        <div className="
        sm:h-72
        xl:h-96 
        2xl:h-96 mt-1">
            {/* <Carousel slide={false} pauseOnHover> */}
            <Carousel slide={true} pauseOnHover>

                <div className="relative">
                    <img className="opacity-40 flex justify-center" src={Shopping_1} alt="old shopping arcade in " />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> SUN CITY SHOPPING ARCADE </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-24 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Shopping_2} alt="Parco City Urasoe Entrance Sign" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> Urasoe </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-7 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Shopping_3} alt="Parco City Urasoe second floor view of escalators" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> PARCO City</h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-14 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
export default ShoppingCarousel;




//TODO - Center div (sticks to left when window is enlarged >1160,n )

//TODO - Watermarks