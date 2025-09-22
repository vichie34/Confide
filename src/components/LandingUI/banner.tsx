import { useEffect, useState } from "react";
import { FaApple, FaAndroid } from "react-icons/fa"; // Import Apple and Android icons
export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [detectedOS, setDetectedOS] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.confide";
    const IOS_URL = "https://apps.apple.com/app/confide/id123456789";

    const detectOS = () => {
        if (typeof navigator === "undefined") return null;
        const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
        // iOS detection
        if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
            return "ios";
        }
        // Android detection
        if (/android/i.test(ua)) {
            return "android";
        }
        return "other";
    };

    useEffect(() => {
        const os = detectOS();
        setDetectedOS(os);
        setIsMobile(os === "ios" || os === "android");
    }, []);

    const handleRedirect = (os: string) => {
        if (os === "android") {
            window.location.href = ANDROID_URL;
        } else if (os === "ios") {
            window.location.href = IOS_URL;
        }
    };

    const handleDownloadClick = () => {
        // If mobile and we detected an OS, automatically redirect to store
        if (isMobile && detectedOS && detectedOS !== "other") {
            handleRedirect(detectedOS);
            return;
        }

        // Desktop or unknown: open modal with QR code that points to a redirect page
        setIsModalOpen(true);
    };

    return (
        <div>
            {/* Header */}
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-8 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="/assets/confide_logo_dark.png"
                            alt="Confide Logo"
                            className="h-8 w-auto"
                        />
                    </div>
                    <button className="bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 cursor-pointer transition-colors"
                        onClick={handleDownloadClick}
                    >
                        Get Confide App
                    </button>
                </div>
            </header>

            {/* Banner */}
            <div
                className="relative h-[888px] w-full bg-no-repeat bg-center flex justify-center items-center"
                style={{
                    backgroundImage: "url('/assets/confide_background 1.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center -39px",
                }}
            >
                <main
                    className="absolute text-center text-black px-4"
                    style={{
                        top: "17%", // Adjusted for desktop to move the text higher
                    }}
                >
                    <div className="max-w-3xl mx-auto sm:mt-[-10px] md:mt-0">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                            Welcome to Confide Community
                        </h1>
                        <p className="text-lg md:text-xl text-black-200 mb-8">
                            Your Space for Meaningful Connections and Conversations
                        </p>
                        <button
                            className="bg-orange-500 text-black px-6 py-3 cursor-pointer rounded-full text-lg font-medium hover:bg-orange-600 transition-colors"
                            onClick={handleDownloadClick}
                        >
                            Download Confide
                        </button>
                    </div>
                    <style jsx>{`
                    @media (max-width: 640px) {
                        main {
                            top: 10%; /* Adjusted for mobile view to move text even higher */
                        }
                    }
                   `}</style>
                </main>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gradient-to-r from-[#FDECD4] to-[#f5f5f5] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#FDECD4] rounded-lg shadow-lg p-6 w-md">
                        <div className="flex item-center justify-center">
                            <img src="/assets/confide_logo_dark.png" alt="logo" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Get the App</h2>
                        <p className="text-gray-700 mb-6">Choose your operating system to download the app:</p>

                        {/* If the modal was opened on desktop (or unknown), show a QR that points to /get-app.html which will redirect based on the scanner's OS. */}
                        {!isMobile && (
                            <div className="flex flex-col items-center space-y-4">
                                <p className="text-sm text-gray-600">Scan this QR code with your phone to open the correct app store.</p>
                                <img
                                    src={typeof window !== 'undefined' ? `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(window.location.origin + '/get-app.html')}` : '/assets/confide_logo_dark.png'}
                                    alt="Scan to get the app"
                                    className="w-56 h-56 bg-white p-2 rounded-md"
                                />
                                <div className="flex space-x-3">
                                    <a href={ANDROID_URL} className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                        <FaAndroid />
                                        <span className="text-sm">Android</span>
                                    </a>
                                    <a href={IOS_URL} className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                                        <FaApple />
                                        <span className="text-sm">iOS</span>
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* If opened on mobile (rare, since mobile users are auto-redirected) show direct buttons */}
                        {isMobile && (
                            <div className="flex justify-between">
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                                    onClick={() => handleRedirect("android")}
                                >
                                    <FaAndroid className="text-xl" />
                                    <span>Android</span>
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                                    onClick={() => handleRedirect("ios")}
                                >
                                    <FaApple className="text-xl" />
                                    <span>iOS</span>
                                </button>
                            </div>
                        )}
                        <button
                            className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}