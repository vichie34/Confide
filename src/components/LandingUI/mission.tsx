function Mission() {
    return (
        <div className="bg-[#fdf1dc] h-[365px] flex items-center justify-center p-3 mt-0"> {/* Remove extra top spacing */}
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-xl md:text-2xl font-medium mb-4">
                    Do You Ever Wish You Just Had <span className="text rounded-full bg-[#f97316] p-1 font-semibold">Someone to Talk to?</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed">
                    At Confide Community, we believe in the power of vulnerability.
                    <br />
                    Join us in a space where your social media, your connections are fostered,
                    <br />
                    and genuine connections are formed.
                </p>
            </div>
        </div>
    )
}

export default Mission;
