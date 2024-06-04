import { useState } from 'react';
import { TaxiModal } from './modals/TaxiModal';
import {
	FaPersonSwimming, FaStore, FaPeopleRoof, FaMoneyBill, FaHospital,
	FaPersonMilitaryPointing, FaBowlFood, FaTaxi,
} from "react-icons/fa6";
import { GiJapan } from "react-icons/gi";

const SideBar = () => {
	const [showTaxiModal, setShowTaxiModal] = useState(false);

	const Divider = () => <hr className="sidebar-hr" />;

	const toggleTaxiModal = () => {
		setShowTaxiModal(!showTaxiModal);
	};

	const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            const yOffset = -10; // Adjust offset for fixed headers if necessary
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

	const SideBarIcon = ({ icon, onClick }) => (
		<div className="sidebar-icon group" onClick={onClick}>
			{icon}
		</div>
	);

	return (
		<div className="fixed top-0 right-2 h-screen w-10 m-0 flex flex-col justify-evenly bg-primary text-gray-100 opacity-70">
			<SideBarIcon icon={<GiJapan size="28" color="black" />} onClick={() => scrollToSection('top')} />
			<Divider />
			<SideBarIcon icon={<FaBowlFood size="28" color="black" />} onClick={() => scrollToSection('section-1')} />
			<SideBarIcon icon={<FaPersonSwimming size="28" color="black" />} onClick={() => scrollToSection('section-2')} />
			<SideBarIcon icon={<FaStore size="28" color="black" />} onClick={() => scrollToSection('section-3')} />
			<SideBarIcon icon={<FaPeopleRoof size="28" color="black" />} onClick={() => scrollToSection('section-4')} />
			<SideBarIcon icon={<FaMoneyBill size="28" color="black" />} onClick={() => scrollToSection('section-5')} />
			<SideBarIcon icon={<FaHospital size="28" color="black" />} onClick={() => scrollToSection('section-6')} />
			<SideBarIcon icon={<FaPersonMilitaryPointing size="28" color="black" />} onClick={() => scrollToSection('section-7')} />
			<Divider />
			<SideBarIcon icon={<FaTaxi size="28" className="text-yellow-500" />} onClick={toggleTaxiModal} />
			{showTaxiModal && <TaxiModal onClose={toggleTaxiModal} />}
		</div>
	);
};

export default SideBar;