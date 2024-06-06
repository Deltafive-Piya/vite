"use client";

import { Carousel } from "flowbite-react";
// import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Police_1 from "../../assets/BStoddardPhotos/Police/Police_1.png";
import Police_2 from "../../assets/BStoddardPhotos/Police/Police_1.png";
import Police_3 from "../../assets/BStoddardPhotos/Police/Police_1.png";
import Police_4 from "../../assets/BStoddardPhotos/Police/Police_1.png";

export function PoliceCarousel() {
    return (
        <div>
            <div className="flex flex-row h-56 grid-cols-2 gap-4">
                {/* Yanbaru Banking */}
                <Carousel slide={true} pauseOnHover indicators={false}>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Police_1} alt="police vehicle frontal view 1" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Smooth </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-32 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Police_2} alt="police vehicle frontal view 2" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Operator </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-28 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                </Carousel>

                {/* YYY Banking */}
                <Carousel slide={true} pauseOnHover indicators={false}>
                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Police_3} alt="police vehicle frontal view 3" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Smoother </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-32 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <img className="opacity-40 flex justify-center" src={Police_4} alt="police vehicle frontal view 4" />
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <h3 className="sm:text-lg xl:text-2xl 2xl:text-3xl text-black scale-x-95 tracking-widest font-akuya"> Operator </h3>
                            <a href="https://bstoddardphoto.smugmug.com">
                                <img className="absolute bottom-0 right-0 mr-4 mb-32 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                            </a>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
export default PoliceCarousel;