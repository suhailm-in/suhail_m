import { useEffect } from "react";

const CustomSEO = ({
  title = "Suhail M | Portfolio",
  description = "Explore my projects, articles, and skills in cybersecurity, software engineering, and AI.",
  url = typeof window !== "undefined" ? window.location.href : "",
  image = "https://yourdomain.com/default-preview.jpg", // Default OG image
  type = "website",
  jsonLd = null,
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Open Graph / Social Sharing
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
    ];

    ogTags.forEach(({ property, content }) => {
      let element = document.querySelector(`meta[property='${property}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    // Structured Data (JSON-LD)
    if (jsonLd) {
      let script = document.getElementById("json-ld");
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "json-ld";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, url, image, type, jsonLd]);

  return null;
};

export default CustomSEO;
