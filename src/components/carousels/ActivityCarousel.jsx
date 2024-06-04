
"use client";

import { Carousel } from "flowbite-react";
import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Activity_1 from '../../assets/BStoddardPhotos/Activity/Activity_1.png';
import Activity_2 from '../../assets/BStoddardPhotos/Activity/Activity_2.png';
import Activity_3 from '../../assets/BStoddardPhotos/Activity/Activity_3.png';


export function ActivityCarousel() {
    return (
        <div className="
                        sm:h-72
                        xl:h-72 
                        2xl:h-72 ">
            {/* <Carousel slide={false} pauseOnHover> */}
            <Carousel slide={true} pauseOnHover>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-40" src={Activity_1} alt="Surfer shack in Chatan" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> CHATAN </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-40" src={Activity_2} alt="ocean view from Mihama" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> MIHAMA </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-40" src={Activity_3} alt="traditional stir-fry dish" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> URUMA </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
export default ActivityCarousel;
