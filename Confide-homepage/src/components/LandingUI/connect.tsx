const features = [
    {
        title: "Discover Chat Rooms",
        description: "Connect with like-minded individuals in our engaging chat rooms. Join discussions that matter to you.",
        image: "/assets/Chat.png",
        bgColor: "bg-orange-50"
    },
    {
        title: "Wallet System",
        description: "Securely manage your transactions with our integrated wallet system. Easy-to-use digital features for a seamless experience.",
        image: "/assets/Wallet.png",
        bgColor: "bg-gray-50"
    },
    {
        title: "Wellbeing Hub",
        description: "Learn about the practices required to maintain optimal wellbeing. Access resources and expert guidance.",
        image: "/assets/Checkmark.png",
        bgColor: "bg-gray-50"
    },
    {
        title: "Special Practitioners",
        description: "Connect with certified wellness guides and practitioners. Get personalized support for your journey.",
        image: "/assets/Group 13.png",
        bgColor: "bg-orange-50"
    }
];

function FeatureCard({ title, description, image, bgColor, customClasses }: {
    title: string;
    description: string;
    image: string;
    bgColor: string;
    customClasses: string; // Custom classes for size and border-radius
}) {
    return (
        <div
            className={`${bgColor} ${customClasses} md:py-16 md:px-10 flex flex-col md:flex-row items-center md:items-start shadow-lg transition-transform transform hover:scale-105`}
        >
            {/* Image */}
            <div className="mb-4 md:mb-0 md:mr-4">
                <img src={image} alt={title} className="w-40 h-25 object-contain" />
            </div>
            {/* Text */}
            <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function Connect() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Connect, Share, Thrive
                    </h1>
                </div>

                {/* Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Row */}
                    <FeatureCard
                        title={features[0].title}
                        description={features[0].description}
                        image={features[0].image}
                        bgColor={features[0].bgColor}
                        customClasses="h-[256px] w-full md:w-[470px] rounded-tl-[30px] rounded-bl-[30px] rounded-tr-[30px] rounded-br-none mt-8"
                    />
                    <FeatureCard
                        title={features[1].title}
                        description={features[1].description}
                        image={features[1].image}
                        bgColor={features[1].bgColor}
                        customClasses="h-[256px] w-full md:w-[520px] rounded-tr-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-bl-none md:ml-[-20px]"
                    />

                    {/* Second Row */}
                    <FeatureCard
                        title={features[2].title}
                        description={features[2].description}
                        image={features[2].image}
                        bgColor={features[2].bgColor}
                        customClasses="h-[256px] w-full rounded-tl-[30px] rounded-bl-[30px] rounded-tr-none rounded-br-[30px]"
                    />
                    <FeatureCard
                        title={features[3].title}
                        description={features[3].description}
                        image={features[3].image}
                        bgColor={features[3].bgColor}
                        customClasses="h-[256px] w-full rounded-tr-[30px] rounded-br-[30px] rounded-tl-none rounded-bl-[30px]"
                    />
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center h-319px bg-gradient-to-r from-[#FDECD4] to-[#f5f5f5] py-12 px-4 rounded-[30px]">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Join Confide Community Today!
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Ready to start your journey of meaningful connections and community? Join today and experience the power of authentic connections.
                    </p>
                    <button className="bg-orange-500 text-black px-8 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors duration-200">
                        Download Confide
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Connect;