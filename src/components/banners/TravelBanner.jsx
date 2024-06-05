"use client";

import Hello_0 from "../../assets/BStoddardPhotos/Hello/Hello_0.jpg";
import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';


const TravelBanner = () => {
    return (
        <div>
            <div id="top" className="relative sm:h-96 xl:h-96 2xl:h-full">
                <img className='opacity-70 w-full h-full object-cover rounded-lg' src={Hello_0} alt="Shuri Castle" />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className='rounded-2xl shadow-primary bg-primary bg-gradient-to-b from-transparent to-white opacity-80'>
                        <h2 className="text-4xl font-lynda flex justify-center mb-2 mt-"> はいさい</h2>
                        <h3 className="text-3xl font-lynda flex justify-center mb-1"> Okinawa Welcomes You</h3>
                    </div>
                    <a href="https://bstoddardphoto.smugmug.com">
                        <img className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6" src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                    </a>
                </div>
            </div>
        </div>
    );
};
export default TravelBanner;