import { useState } from "react";
import { FaApple, FaAndroid } from "react-icons/fa"; // Import Apple and Android icons
export default function Banner() {
    const [isModalOpen, setIsModalOpen] = useState(true); // Modal is open by default

    const handleRedirect = (os: string) => {
        if (os === "android") {
            window.location.href = "https://play.google.com/store/apps/details?id=com.confide";
        } else if (os === "ios") {
            window.location.href = "https://apps.apple.com/app/confide/id123456789";
        }
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
                    <button className="bg-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-orange-600 cursor-pointer transition-colors">
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
                            onClick={() => setIsModalOpen(true)}
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
            {/* {isModalOpen && (
                <div className="fixed inset-0 bg-gradient-to-r from-[#FDECD4] to-[#f5f5f5] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#FDECD4] rounded-lg shadow-lg p-6 w-md">
                        <div className="flex item-center justify-center">
                            <img src="/assets/confide_logo_dark.png" alt="logo" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Get the App</h2>
                        <p className="text-gray-700 mb-6">Choose your operating system to download the app:</p>
                        <div className="flex justify-between">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                                onClick={() => handleRedirect("android")}
                            >
                                <div className="flex">
                                    <img
                                        src="/assets/android_logo.png"
                                        alt="Android Logo"
                                        className="w-5 h-5"
                                    />
                                    <span>Android</span>
                                </div>
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                                onClick={() => handleRedirect("ios")}
                            >
                                <div className="flex">
                                    <img
                                        src="/assets/ios_logo.png"
                                        alt="iOS Logo"
                                        className="w-5 h-5"
                                    />
                                    <span>iOS</span>
                                </div>
                            </button>
                        </div>
                        <button
                            className="mt-4 text-gray-500 hover:text-gray-700 text-sm"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )} */}
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gradient-to-r from-[#FDECD4] to-[#f5f5f5] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-r from-[#f5f5f5] to-[#FDECD4] rounded-lg shadow-lg p-6 w-md">
                        <div className="flex item-center justify-center">
                            <img src="/assets/confide_logo_dark.png" alt="logo" />
                        </div>
                        <h2 className="text-xl font-bold mb-4">Get the App</h2>
                        <p className="text-gray-700 mb-6">Choose your operating system to download the app:</p>
                        <div className="flex justify-between">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                                onClick={() => handleRedirect("android")}
                            >
                                <FaAndroid className="text-xl" /> {/* Android Icon */}
                                <span>Android</span>
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
                                onClick={() => handleRedirect("ios")}
                            >
                                <FaApple className="text-xl" /> {/* Apple Icon */}
                                <span>iOS</span>
                            </button>
                        </div>
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