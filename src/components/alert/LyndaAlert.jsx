import { Alert } from "flowbite-react";

export function LyndaAlert() {
    return (
        <Alert color="info" WithBorderAccent onDismiss={() => alert('Visit Lynk Ynk @ HighRank Tattoo - Pooler, GA')}>
            <div className="flex justify-center">
                <a className="text-center font-akuya block" href="https://deltafive-piya.github.io/Lynk_Ynk_AlphaPortfolio/index.html">
                    <span className="font-medium">Schedule an appointment with Lynk Ynk Tattoos </span> Fineline & Realism Specialist
                </a>
            </div>
        </Alert>
    );
}
export default LyndaAlert;