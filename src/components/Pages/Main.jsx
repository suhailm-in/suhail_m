import About from "../sections/About";
import Experience from "../sections/Experience";
import Project from "../sections/Project";
import Home from "../sections/Home";
import Contact from "../sections/Contact";
import CustomSEO from "../includes/CustomSEO/CustomSEO";
import HomePage from "../../assets/images/screenshots/HomePage.png"

const Main = () => {

    // JSON-LD structured data for Home Page
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Suhail M Portfolio",
        url: window.location.href,
        description: "Explore the portfolio of Suhail M, showcasing projects in cybersecurity, AI, and web development.",
    };

    return (
        <>
        {/* Custom SEO for Home Page */}
            <CustomSEO
                title="Suhail M | Cybersecurity, AI & Web Development Portfolio"
                description="Welcome to the portfolio of Suhail M, featuring projects and insights in cybersecurity, AI, and modern web solutions."
                url={window.location.href}
                image={HomePage} // Optional OG image
                type="website"
                jsonLd={jsonLd}
            />
            <Home />
            <About />
            <Experience />
            <Project />
            <Contact />
        </>
    );
};

export default Main;
