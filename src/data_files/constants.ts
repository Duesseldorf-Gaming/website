import ogImageSrc from "@images/social.png";

export const SITE = {
    title: "Düsseldorf Gaming",
    tagline: "E-Sports Düsseldorf",
    description: "E-Sports Sparte des Hochschulsports der Düsseldorfer Hochschulen und Universitäten.",
    description_short: "E-Sports Sparte des Düsseldorfer Hochschulsports",
    url: "https://duesseldorf-gaming.de",
    author: "Düsseldorf Gaming",
};

export const SEO = {
    title: SITE.title,
    description: SITE.description,
    structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        inLanguage: "de-DE",
        "@id": SITE.url,
        url: SITE.url,
        name: SITE.title,
        description: SITE.description,
        isPartOf: {
            "@type": "WebSite",
            url: SITE.url,
            name: SITE.title,
            description: SITE.description,
        },
    },
};

export const OG = {
    locale: "en_US",
    type: "website",
    url: SITE.url,
    title: `${SITE.title}: : E-Sports Düsseldorf`,
    description: "E-Sports Sparte des Hochschulsports der Düsseldorfer Hochschulen und Universitäten.",
    image: ogImageSrc,
};