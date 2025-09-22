import Banner from "./banner";
import Mission from "./mission";
import Connect from "./connect";
import Footer from "./footer";
// import Unique from "./unique";
import Special from "./special";

// Aeonik

const LandingPageHeader = () => {
    return (
        <div>
            <Banner />
            <Mission />
            <Special />
            <Connect />
            <Footer />
        </div>
    );
};

export default function Home() {
    return (
        <div>
            <LandingPageHeader />
        </div>
    );
}