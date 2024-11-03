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

export const gameColors: any = {
    valorant: 'bg-valorant',
    league: 'bg-league',
    rocket_league: 'bg-rocket',
    overwatch: 'bg-overwatch',
    counter_strike: 'bg-white',
}

export const gameColorsHover: any = {
    valorant: 'hover:bg-valorant',
    league: 'hover:bg-league',
    rocket_league: 'hover:bg-rocket',
    overwatch: 'hover:bg-overwatch',
    counter_strike: 'hover:bg-white',
}

export const gameTextColors: any = {
    valorant: 'text-valorant',
    league: 'text-league',
    rocket_league: 'text-rocket',
    overwatch: 'text-overwatch',
    counter_strike: 'text-white',
}

export const gameImages: any = {
    valorant: 'bg-valorant-image',
    league: 'bg-league-image',
    rocket_league: 'bg-rocket_league-image',
    overwatch: 'bg-overwatch-image',
    counter_strike: 'bg-counter_strike-image',
}

export const gameNames: any = {
    valorant: 'Valorant',
    league: 'League of Legends',
    rocket_league: 'Rocket League',
    overwatch: 'Overwatch',
    counter_strike: 'Counter Strike',
}