const features = [
    {
        title: "Niche Social Network",
        description: "Over 20 chat rooms dedicated to topics that matter to you - health, fitness, relationships, careers, and more",
        image: "/assets/chat-confide.png",
    },
    {
        title: "Friendly Community",
        description: "Join thoughtful individuals shaping our network through",
        image: "/assets/Group 8.png",
        color: "bg-orange-100"
    },
    {
        title: "Optimize Your Wellbeing",
        description: "Conveniently enhance your physical and mental wellbeing through meaningful conversations.",
        image: "/assets/Group 10.png",
        color: "bg-green-100"
    },
    {
        title: "Build Real Friends",
        description: "Thrilled to have you and your friends on board! Whether it's the little details of life or monumental secrets, your contribution is always welcome.",
        image: "/assets/Friends meeting in a cafe.png",
        color: "bg-red-100"
    },
    {
        title: "Safe and Secure!",
        description: "Prioritizing safety and security. Confide Community safeguards your anonymity while sharing what matters to you.",
        image: "/assets/protection shield with a keyhole.png",
        color: "bg-purple-100"
    }
];
function FeatureCard({ title, description, image, diagonal, isOdd }: {
    title: string;
    description: string;
    image: string;
    diagonal?: boolean; // Determines if the card should be shifted diagonally
    isOdd: boolean; // Determines if the card is odd-indexed
}) {
    return (
        <div
            className={`flex flex-col md:flex-row h-auto md:h-[213.08px] items-start space-y-4 md:space-y-0 md:space-x-4 py-10 px-7 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${diagonal ? "md:ml-8" : "md:mr-8"
                }`}
        >
            {/* Image */}
            <div className={`flex ${isOdd ? "justify-end" : "justify-start"} w-full md:w-auto`}>
                <img src={image} alt={title} className="w-30 h-30 md:w-67 md:h-35 object-contain" />
            </div>
            {/* Text */}
            <div className="text-center md:text-left w-full">
                <h3 className="font-semibold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function Special() {
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">
                    What Sets Us Apart?
                </h2>
                {/* Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            image={feature.image}
                            diagonal={index % 2 !== 0} // Shift odd-indexed cards diagonally
                            isOdd={index % 2 !== 0} // Alternate image alignment
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Special;