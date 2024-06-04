"use client";

import { Carousel } from "flowbite-react";
// import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Hotel_11 from "../../assets/BStoddardPhotos/Hotels/yanbaru/Hotel_11.png";
import Hotel_12 from "../../assets/BStoddardPhotos/Hotels/yanbaru/Hotel_12.png";
import Hotel_21 from "../../assets/BStoddardPhotos/Hotels/aien/Hotel_21.png";
import Hotel_22 from "../../assets/BStoddardPhotos/Hotels/aien/Hotel_22.png";

export function HotelCarousel() {
    return (
        <div>
            <div className="flex flex-row h-56 grid-cols-2 gap-4">
                {/* Yanbaru Hotel */}
                <Carousel slide={true} pauseOnHover indicators={false}>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Hotel_11} alt="old shopping arcade in " />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> やんばるホステル </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-32 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Hotel_12} alt="old shopping arcade in " />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Yanbaru Hostel </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-28 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                </Carousel>

                {/* YYY Hotel */}
                <Carousel slide={true} pauseOnHover indicators={false}>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Hotel_21} alt="old shopping arcade in " />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> アイエン コーヒー＆ホステル </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-32 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
            
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Hotel_22} alt="old shopping arcade in " />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Aien Coffee & Hostel </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-36 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default HotelCarousel;