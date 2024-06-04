
"use client";

import { Carousel } from "flowbite-react";
import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Hello_1 from '../../assets/BStoddardPhotos/Hello/Hello_1.jpg';
import Hello_2 from '../../assets/BStoddardPhotos/Hello/Hello_2.jpg';
import Hello_3 from '../../assets/BStoddardPhotos/Hello/Hello_3.jpg';
import Hello_4 from '../../assets/BStoddardPhotos/Hello/Hello_4.jpg';
import Hello_5 from '../../assets/BStoddardPhotos/Hello/Hello_5.jpg';

export function TravelCarouselOld() {
    return (
        <div className="
                        sm:h-72
                        xl:h-96 
                        2xl:h-96 ">
            {/* <Carousel slide={false} pauseOnHover> */}
            <Carousel slide={true} pauseOnHover>

                <div className="relative">
                    <img className="opacity-40" src={Hello_2} alt="women in traditional Okinawan clothing" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> CULTURAL </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-24 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Hello_1} alt="motion-blurred Eisa Festival" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> SPIRIT </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-7 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Hello_3} alt="beachside" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> ABUNDANT </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-14 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Hello_4} alt="male-shisa side-portrait" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> HISTORICAL </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-14 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>

                <div className="relative">
                    <img className="opacity-40" src={Hello_5} alt="fireworks at night" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> FESTIVE </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-7 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                
            </Carousel>
        </div>
    );
}
