import okinawaShisaL from '../assets/header/shisadog-left.jpg';
import okinawaShisaR from '../assets/header/shisadog-right.jpg';

const Header = () => {
    return (
        <header className="text-2xl font-lynda p-2 rounded-md bg-gray-800 opacity-90 text-secondary mb-2 mt-2">
            <div className="flex justify-evenly">

                {/* left */}
                <div>
                    <img src={okinawaShisaL} alt="Female Shisa dog" className="size-6 w-auto" />
                </div>

                {/* middle */}
                <div className="">
                    <h5>めんそーれー Ryukyu Travel Page - 沖縄市</h5>
                </div>

                {/* right */}
                <div>
                    <img src={okinawaShisaR} alt="Male Shisa dog" className="size-6 w-auto" />
                </div>
            </div>
        </header>);
};

export default Header;