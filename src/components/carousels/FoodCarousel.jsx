
"use client";

import { Carousel } from "flowbite-react";
// import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from '../../assets/BStoddardPhotos/watermark/BSPHOTO_black.png';
import Food_1 from '../../assets/BStoddardPhotos/Food/Food_1.jpg';
import Food_2 from '../../assets/BStoddardPhotos/Food/Food_2.jpg';
import Food_3 from '../../assets/BStoddardPhotos/Food/Food_3.jpg';
import Food_4 from '../../assets/BStoddardPhotos/Food/Food_4.jpg';
import Food_5 from '../../assets/BStoddardPhotos/Food/Food_5.jpg';

export function FoodCarousel() {
    return (
        <div className="
                        sm:h-72
                        xl:h-72 
                        2xl:h-72 ">
            {/* <Carousel slide={false} pauseOnHover> */}
            <Carousel slide={true} pauseOnHover>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-80" src={Food_3} alt="sanmainiku soab" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> SANMAINIKU </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-70" src={Food_1} alt="soki soba" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> SOKI </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-70" src={Food_2} alt="traditional stir-fry dish" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> CHAMPURU </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-50" src={Food_4} alt="goya champuru" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> GOYA </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
                <div className="relative">
                    <img className="carousel-image-fitted opacity-50" src={Food_5} alt="nakami soba" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                        <h3 className="sm:text-4xl xl:text-5xl 2xl:text-6xl text-black scale-x-95 tracking-widest font-akuya"> NAKAMI </h3>
                        <a href="https://bstoddardphoto.smugmug.com">
                            <img className="absolute bottom-0 right-0 mr-4 mb-96 opacity-90 max-w-6" src={WaterMarkB} alt="B StoddardPhotos Watermark" />
                        </a>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
export default FoodCarousel;
