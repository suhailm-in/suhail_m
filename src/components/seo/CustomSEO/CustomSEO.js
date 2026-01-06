import { useEffect } from "react";

const SITE_URL = "https://suhailm.in";

const CustomSEO = ({
  title = "Suhail M | Portfolio",
  description = "Cybersecurity engineer and software developer specializing in secure systems, AI, and DevSecOps.",
  path = "",
  image = `${SITE_URL}/logo_02.png`,
  type = "website",
  jsonLd,
  noIndex = false,
}) => {
  const canonicalUrl = `${SITE_URL}${path}`;

  useEffect(() => {
    /* ---------- TITLE ---------- */
    document.title = title;

    /* ---------- META TAG HELPER ---------- */
    const setMeta = (attr, key, value) => {
      let el = document.querySelector(`meta[${attr}='${key}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    /* ---------- BASIC SEO ---------- */
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex,nofollow" : "index,follow");

    /* ---------- OPEN GRAPH ---------- */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", image);

    /* ---------- TWITTER ---------- */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    /* ---------- CANONICAL ---------- */
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    /* ---------- JSON-LD ---------- */
    if (jsonLd) {
      const scriptId = `jsonld-${path || "home"}`;
      let script = document.getElementById(scriptId);

      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = scriptId;
        document.head.appendChild(script);
      }

      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonicalUrl, image, type, jsonLd, noIndex, path]);

  return null;
};

export default CustomSEO;
