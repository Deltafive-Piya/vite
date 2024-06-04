import { Button, Modal } from 'flowbite-react';
import Taxi_0 from '../../assets/BStoddardPhotos/Taxi/Taxi_0.jpg';
import WaterMarkW from '../../assets/BStoddardPhotos/watermark/BSPHOTO_white.png';


export function TaxiModal({ onClose }) {
    return (
        <Modal show={true} size="md" onClose={onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="text-center bg-primary rounded-2xl p-2">
                    <h4>DAIKO- 098-932-4035</h4>
                    <h4>on base- 654-8888</h4>
                    <img src={Taxi_0} alt="New and Old Model Daiko Taxis" />
                    <a href="https://bstoddardphoto.smugmug.com">
                        <img className="absolute bottom-0 right-0 mr-10 mb-36 opacity-90 max-w-6 " src={WaterMarkW} alt="B StoddardPhotos Watermark" />
                    </a>
                    <h3 className="mb-5 text-lg font-normal text-secondary dark:text-gray-400">
                        DAIKO TAXI SERVICE - ENGLISH FRIENDLY!
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button color="gray" onClick={onClose}>
                            OK!
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}