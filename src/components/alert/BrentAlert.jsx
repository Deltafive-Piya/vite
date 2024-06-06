// import { Alert } from "flowbite-react";

// export function BrentAlert() {
//     return (
//         <Alert color="info" WithBorderAccent onDismiss={() => alert('Visit bstoddardphoto_fashion @ Instagram')}>
//             <div className="flex justify-center">
//                 <a className="text-center font-akuya block" href="https://www.instagram.com/bstoddardphoto_fashion/">
//                     <span className="font-medium">Schedule an appointment with BStoddardPhotos... </span> Fashion, Wedding & Nature Photographer
//                 </a>
//             </div>
//         </Alert>
//     );
// }
// export default BrentAlert;

// new window version

import { Alert } from "flowbite-react";

export function BrentAlert() {
    const openInNewWindow = (url) => {
        window.open(
            url,
            "_blank",
            "width=800,height=600,left=200,top=200"
        );
    };

    return (
        <Alert color="info" WithBorderAccent onDismiss={() => alert('Visit bstoddardphoto_fashion @ Instagram')}>
            <div className="flex justify-center">
                <a
                    className="text-center font-akuya block"
                    href="https://www.instagram.com/bstoddardphoto_fashion/"
                    onClick={(e) => {
                        e.preventDefault();
                        openInNewWindow("https://www.instagram.com/bstoddardphoto_fashion/");
                    }}
                >
                    <span className="font-medium">Schedule an appointment with BStoddardPhotos... </span> Fashion, Wedding & Nature Photographer
                </a>
            </div>
        </Alert>
    );
}

export default BrentAlert;
