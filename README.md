![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white) 
[![Astro](https://img.shields.io/badge/astro-%232C2052.svg?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/) 
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)<br/>
[![Deploy Astro site to Pages](https://github.com/Duesseldorf-Gaming/website/actions/workflows/astro.yml/badge.svg)](https://github.com/Duesseldorf-Gaming/website/actions/workflows/astro.yml)

<!-- TOC -->
* [🚀 Project Content File Structure](#-project-content-file-structure)
  * [👤 Player Files](#-player-files)
  * [👥 Team Files](#-team-files)
* [🧞 Commands](#-commands)
  * [👀 Want to learn more about Astro?](#-want-to-learn-more-about-astro)
<!-- TOC -->

# 🚀 Project Content File Structure

```text
/src/
├── players/
│   ├── players/
│   │   └── playername.md
│   ├── teams/
│   │   └── teamname.md
└── images/
    ├── players/
    │   └── imagename.jpg
    ├── team_images/
    │   └── imagename.jpg
    └── teams/
        ├── Teamname.png
        └── Teamname_text.png
```

## 👤 Player Files
> [!CAUTION]
> Delete any tags that aren't being used. Not doing so will fail the deployment
```yaml
---
tag: ""
name: ""
image: "/images/players/placeholder.jpg"
social:
  youtube: ""
  twitch: ""
---
```

| tags    | required | purpose                    |
|---------|:--------:|----------------------------|
| tag     |    ✅     | gamertag                   |
| name    |    ❌     | real name                  |
| image   |    ✅     | image                      |
| youtube |    ❌     | url to the youtube account |
| twitch  |    ❌     | url to the twitch account  |

## 👥 Team Files
> [!CAUTION]
> Delete any tags that aren't being used. Not doing so will fail the deployment

```yaml
---
name: ""
game: ""
league: ""
established: ""
uniliga: ""
team_image: "/images/team_images/placeholder.jpg"
manager:
coach:
captain:
players: []
analysts: []
---
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
```

| tags        | required | purpose                                                                                 |
|-------------|:--------:|-----------------------------------------------------------------------------------------|
| name        |    ✅     | teamname excluding the DG tag with the first letter in caps                             |
| game        |    ✅     | game in the format 'valorant', 'league', 'overwatch', 'rocket_league', 'counter_strike  |
| league      |    ✅     | league of the team (any single number)                                                  |
| established |    ✅     | year the team was established in                                                        |
| uniliga     |    ❌     | link to the teams uniliga profile                                                       |
| team_image  |    ❌     | image to be display on the teams page '/src/images/team_images/filename.jpg'            |
| manager     |    ❌     | all lower case name of the player file ('norial' for 'Norial.md')                       |
| coach       |    ❌     | all lower case name of the player file ('norial' for 'Norial.md')                       |
| captain     |    ✅     | all lower case name of the player file ('norial' for 'Norial.md')                       |
| players     |    ❌     | array or filenames ( \[player1, player2, player3\] for 'Player1.md', 'Player2.md', ...) |
| analysts    |    ❌     | array or filenames ( \[player1, player2, player3\] for 'Player1.md', 'Player2.md', ...) |

Team description text is directly under the `---` with a max of 210 chars including spaces and punctuation.


# 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|:--------------------------|:-------------------------------------------------|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more about Astro?

Feel free to check [the documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).
