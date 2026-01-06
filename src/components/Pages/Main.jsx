import About from "../sections/About";
import Experience from "../sections/Experience";
import Project from "../sections/Project";
import Home from "../sections/Home";
import Contact from "../sections/Contact";
import CustomSEO from "../../components/seo/CustomSEO/CustomSEO";
import HomePage from "../../assets/images/screenshots/HomePage.png"
// import AboutPro from "../sections/AboutPro";

const Main = () => {
  // JSON-LD structured data for Home Page
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "WebSite",
  //   name: "Suhail M Portfolio",
  //   url: window.location.href,
  //   description:
  //     "Explore the portfolio of Suhail M, showcasing projects in cybersecurity, AI, and web development.",
  // };

  return (
    <>
      {/* Custom SEO for Home Page */}
      <CustomSEO
        title="Suhail M | Cybersecurity & Software Engineer"
        description="Personal portfolio of Suhail M — cybersecurity, DevSecOps, AI, and secure software systems."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suhail M",
          url: "https://suhailm.in",
          sameAs: [
            "https://github.com/suhailm-in",
            "https://linkedin.com/in/suhailm-in",
            "https://twitter.com/suhailm_in",
            "https://www.instagram.com/suhailm_in",
          ],
        }}
      />

      <Home />
      <About />
      {/* <AboutPro /> */}
      <Experience />
      <Project />
      <Contact />
    </>
  );
};

export default Main;
