import type { APIRoute, ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import icon from "/public/favicon.svg";

interface Favicon {
    purpose: 'any' | 'maskable' | 'monochrome';
    src: ImageMetadata;
    sizes: number[];
}

const sizes = [200, 100];
const favicons: Favicon[] = [
    {
        purpose: 'any',
        src: icon,
        sizes,
    },
];

export const GET: APIRoute = async () => {
    const icons = await Promise.all(
        favicons.flatMap((favicon) =>
            favicon.sizes.map(async (size) => {
                const image = await getImage({
                    src: favicon.src,
                    width: size,
                    height: size*2,
                    format: "svg",
                });
                return {
                    src: image.src,
                    sizes: `${image.options.width}x${image.options.height}`,
                    type: `image/${image.options.format}`,
                    purpose: favicon.purpose,
                };
            }),
        ),
    );

    const manifest = {
        short_name: "DG",
        name: "Düsseldorf Gaming",
        icons,
        display: "minimal-ui",
        id: "/",
        start_url: "/",
        theme_color: "#F3F3F3",
        background_color: "#010101",
    };

    return new Response(JSON.stringify(manifest));
};