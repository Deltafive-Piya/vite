import { Alert } from "flowbite-react";

export function BrentAlert() {
    return (
        <Alert color="info" WithBorderAccent onDismiss={() => alert('Visit bstoddardphoto_fashion @ Instagram')}>
            <div className="flex justify-center">
                <a className="text-center font-akuya block" href="https://www.instagram.com/bstoddardphoto_fashion/">
                    <span className="font-medium">Schedule an appointment with BStoddardPhotos... </span> Fashion, Wedding & Nature Photographer
                </a>
            </div>
        </Alert>
    );
}
export default BrentAlert;