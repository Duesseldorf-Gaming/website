// 1. Import utilities from `astro:content`
import {z, defineCollection, reference} from 'astro:content';
// 2. Define your collection(s)
const teamsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        game: z.enum(['valorant', 'league', 'rocket_league', 'overwatch', 'counter_strike', 'rainbow']),
        league: z.string(),
        uniliga: z.string().optional(),
        team_image: z.string().optional(),
        manager: reference('players').optional(),
        coach: reference('players').optional(),
        captain: reference('players'),
        players: z.array(reference('players')),
        analysts: z.array(reference('players')).optional(),
    }),
});

const playersCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        tag: z.string(),
        name: z.string().default(''),
        image: z.string().default('/images/players/placeholder.jpg'),
        social: z.object({
            youtube: z.string().optional(),
            twitch: z.string().optional(),
        }),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'teams': teamsCollection,
    'players': playersCollection,
};