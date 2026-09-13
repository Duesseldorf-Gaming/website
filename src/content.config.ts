// 1. Import utilities from `astro:content`
import {defineCollection, reference} from 'astro:content';

// 2. Import loader(s)
import {glob} from 'astro/loaders';

// 3. Import Zod
import {z} from 'astro/zod';
// 2. Define your collection(s)
const teamsCollection = defineCollection({
    loader: glob({
        base: './src/content/teams',
        pattern: '**/!(_)*.md'
    }),
    schema: z.object({
        name: z.string(),
        game: z.enum(['valorant', 'league', 'rocket_league', 'overwatch', 'counter_strike', 'rainbow']),
        league: z.string(),
        established: z.string(),
        uniliga: z.string().optional(),
        team_image: z.string().default('/images/team_images/placeholder.jpg'),
        description: z.string().optional(),
        manager: reference('players').optional(),
        coach: reference('players').optional(),
        captain: reference('players'),
        players: z.array(reference('players')),
        analysts: z.array(reference('players')).optional(),
    }),
});

const playersCollection = defineCollection({
    loader: glob({
        base: './src/content/players',
        pattern: '**/!(_)*.md'
    }),
    schema: z.object({
        tag: z.string(),
        name: z.string().default(''),
        image: z.string().default('/images/players/placeholder.jpg'),
        social: z.object({
            youtube: z.string().optional(),
            twitch: z.string().optional(),
        }).optional(),
    }),
});

const sponsorsCollection = defineCollection({
    loader: glob({
        base: './src/content/sponsors',
        pattern: '**/!(_)*.md'
    }),
    schema: z.object({
        image: z.object({
            link: z.string(),
            alt: z.string(),
            width: z.number(),
            height: z.number(),
        }),
        link: z.string(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'teams': teamsCollection,
    'players': playersCollection,
    'sponsors': sponsorsCollection,
};