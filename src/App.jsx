import React, {useEffect} from 'react';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Footer from './components/Footer';
import LyndaAlert from './components/alert/LyndaAlert';
import BrentAlert from './components/alert/BrentAlert';
import TravelBanner from './components/banners/TravelBanner';
import TravelCarousel from './components/carousels/TravelCarousel';
import FoodCarousel from './components/carousels/FoodCarousel';
import FoodAccordian from './components/accordians/FoodAccordian';
import ActivityCarousel from './components/carousels/ActivityCarousel';
import ShoppingCarousel from './components/carousels/ShoppingCarousel';
import HotelCarousel from './components/carousels/HotelCarousel';
import BankingCarousel from './components/carousels/BankingCarousel';
import PoliceCarousel from './components/carousels/PoliceCarousel';

// Assets
import Food_0 from './assets/BStoddardPhotos/Food/Food_0.jpg';
import Activity_0 from './assets/BStoddardPhotos/Activity/Activity_0.png';
import Shopping_0 from './assets/BStoddardPhotos/Shopping/Shopping_0.png';
import Hotel_0 from './assets/BStoddardPhotos/Hotels/Hotel_0.png';
import Banking_0 from './assets/BStoddardPhotos/Banking/Banking_0.png';
import Hospital_0 from './assets/BStoddardPhotos/Hospital/Hospital_0.png';
import Police_0 from './assets/BStoddardPhotos/Police/Police_0.png';
import WaterMarkW from './assets/BStoddardPhotos/watermark/BSPHOTO_white.png';
import WaterMarkB from './assets/BStoddardPhotos/watermark/BSPHOTO_black.png';

// Splash
import { hideSplashScreen } from 'vite-plugin-splash-screen/runtime';

const App = () => {
  const [sidebarPosition, setSidebarPosition] = React.useState('mr-20');

  const toggleSidebarPosition = () => {
    if (sidebarPosition === 'mr-10') {
      setSidebarPosition('ml-10');
    } else {
      setSidebarPosition('mr-10');
    }
  };

  useEffect(() => {
    hideSplashScreen();
  }, []);

  return (
    <div className={`flex-col min-h-screen space-y-2 ${sidebarPosition}`}>
      
      <Header />
      <TravelBanner />
      <TravelCarousel />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <LyndaAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Food */}
      <div id="section-1" className="relative">
        <img
          className="opacity-70 w-full rounded-lg"
          src={Food_0}
          alt="overhead view of tebichi soba"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            くゎっちーさびら
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Eat healthy
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkW}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <FoodCarousel />
      <FoodAccordian />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <BrentAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Activity */}
      <div id="section-2" className="relative">
        <img
          className="opacity-70 w-full rounded-lg"
          src={Activity_0}
          alt="activity"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            なんくるないさ
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            easy does it
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <ActivityCarousel />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <LyndaAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Shopping */}
      <div id="section-3" className="relative">
        <img
          className="opacity-70 w-full rounded-lg"
          src={Shopping_0}
          alt="shopping"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            ショッピング
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Shopping
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <ShoppingCarousel />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <BrentAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Hotel */}
      <div id="section-4" className="relative">
        <img
          className="opacity-70 w-full rounded-lg"
          src={Hotel_0}
          alt="hotel"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            リラックス
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Relax
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <HotelCarousel />
      <div id="aHealthyAmountOfSpace" className="h-2"></div>
      <LyndaAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Banking */}
      <div id="section-5" className="relative">
        <img
          className="opacity-70 w-full rounded-lg"
          src={Banking_0}
          alt="banking"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            両替
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Money Exchange (Ryou-gaeh)
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <BankingCarousel />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <BrentAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Hospital */}
      <div id="section-6" className="relative">
        <img
          className="opacity-50 w-full rounded-lg"
          src={Hospital_0}
          alt="hospital"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            中部徳洲会病院
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Chubu Tokushukai Hospital
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <LyndaAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      {/* Police */}
      <div id="section-7" className="relative">
        <img
          className="opacity-50 w-full rounded-lg"
          src={Police_0}
          alt="police"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-noto text-black rounded-2xl shadow-primary bg-white bg-opacity-40">
            沖縄県警
          </h2>
          <h3 className="text-3xl font-lynda text-black rounded-2xl shadow-primary mt-8">
            Okinawa Prefecture Police
          </h3>
          <a href="https://bstoddardphoto.smugmug.com">
            <img
              className="absolute bottom-0 right-0 mr-4 mb-4 opacity-90 max-w-6"
              src={WaterMarkB}
              alt="B StoddardPhotos Watermark"
            />
          </a>
        </div>
      </div>
      <PoliceCarousel />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>
      <BrentAlert />
      <div id="aHealthyAmountOfSpace" className="h-10"></div>

      <SideBar />
      <Footer />
    </div>
  );
};

export default App;