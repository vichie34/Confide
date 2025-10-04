import Banner from "./banner";
import Mission from "./mission";
import Connect from "./connect";
import Footer from "./footer";
// import Unique from "./unique";
import Special from "./special";
import { Helmet } from "react-helmet-async";

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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.confidecommunity.com",
    logo: "https://www.confidecommunity.com/assets/confide_logo_dark.png",
    name: "Confide Community",
    sameAs: [
      "https://twitter.com/ConfideCommunity",
      "https://www.facebook.com/ConfideCommunity",
      //   "https://www.linkedin.com/company/confidecommunity",
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Confide Community | Build Real Friendships</title>
        <meta
          name="description"
          content="Confide is a safe and secure community where you connect, chat, and build meaningful friendships."
        />
        <meta
          name="keywords"
          content="community, chat, friendships, confide, social network"
        />
        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://www.confidecommunity.com/" />

        <meta property="og:title" content="Confide Community" />
        <meta
          property="og:description"
          content="Join a safe and secure social network where you can connect with like-minded people."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.confidecommunity.com/" />
        <meta
          property="og:image"
          content="https://www.confidecommunity.com/assets/confide_logo_dark.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Confide Community" />
        <meta
          name="twitter:description"
          content="Connect, chat, and build friendships securely."
        />
        <meta
          name="twitter:image"
          content="https://www.confidecommunity.com/assets/confide_logo_dark.png"
        />
        <meta name="twitter:site" content="@ConfideCommunity" />

        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <LandingPageHeader />
    </div>
  );
}
