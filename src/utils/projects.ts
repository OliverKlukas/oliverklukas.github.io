/**
 * Information about achieved projects.
 */
export const projects: project[] = [
    {
        title: "Remi the cooking assistant",
        description: "Born out of a 48h hackathon to teach AI how to cook. Together with a great team of three other inspiring hackathonees, we developed a creative AI-based cooking assistant that generates new recipes based on personal preferences and interactively guides chefs through each step of the recipe.\n\nTo achieve this, we used OpenAI's GPT-3, one of the most powerful NLP models in the world, and combined it with Google's Flutter framework to quickly prototype our cooking assistant named Remi. Astonishingly, Remi is not only able to invent new, never-before-seen recipe creations, but also dynamically adjust the recipe when ingredients are missing. The resemblance to a well-known French rat is, of course, purely coincidental.",
        stack: [
            {name: "GPT-3", share: 70},
            {name: "Flutter & Dart", share: 25},
            {name: "Cookbooks", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/GPT-3-Recipe-Generator"
    },
    {
        title: "frest.info",
        description: "A tool that brings joy to homeowners lost in the German bureaucratic jungle. Developed during my three-month journey at the Digital Product School, a full-time programme at UnternehmerTUM GmbH to gain hands-on experience in discovering business opportunities and developing digital products that users love.\n\nTogether with an interdisciplinary team, we were challenged by Interhyp AG to simplify energy-efficiency renovations in Germany and make them a joyful experience for homeowners. Using a decision tree with extensive research into German subsidy guidelines, we developed a website that offers homeowners individual advice on energy-efficient renovations and their subsidy options, thus contributing to a more sustainable housing sector in Germany.",
        stack: [
            {name: "ReactJS", share: 50},
            {name: "Kubernetes", share: 20},
            {name: "NodeJS", share: 15},
            {name: "Docker", share: 10},
            {name: "Python", share: 5}
        ],
        liveLink: "https://frest.info/"
    },
    {
        title: "OnePill",
        description: "Won the prize for the best prototype as a technical developer at the two-week THINK. MAKE. START. makeathon, where over 50 highly motivated students come together to develop innovative technical products using customer-centered engineering.\n\nBuilt a fully functional prototype through micro controller programming, 3D printing and laser cutting that can produce medical capsules for individualized drug production.",
        stack: [
            {name: "Laser cutting", share: 30},
            {name: "Embedded engineering", share: 30},
            {name: "3D Printing", share: 20},
            {name: "Customer-centered design", share: 15},
            {name: "Headache medicine", share: 5}
        ],
        projectVideoLink: "https://www.youtube.com/watch?v=PNsIBQ9Uw6I",
    },
    {
        title: "Greenewal",
        description: "Born out of another hackathon, the Science Hack by TUM:Junge Akademie, my great team of five interdisciplinary students and I develop a new vision for our cities. Inspired by the great Bosco Verticale in Milan, we set out to figure out a way to bring nature back into city life. In other words we asked ourselves: how might we make a green transformation of buildings sustainable and aﬀordable to create enjoyable cities to live in?\n\nAfter various design thinking iterations we came up with greenewal. Greenewal is a modular system that retrofits existing buildings with standardized plant modules in order to achieve optimal vegetation coverage of them. When retrofitting buildings with greenewal one leverages the natural strengths of plants in order to reduce temperatures within and outside of buildings, as well as air pollution and noise levels caused by traffic & significantly lower the energy consumption of existing buildings.",
        stack: [
            {name: "Design Thinking", share: 45},
            {name: "figma", share: 40},
            {name: "Storytelling", share: 10},
            {name: "Coffee", share: 5}
        ],
        pitchLink: "./team-9-altair-greenewal-final.pdf",
    },
    {
        title: "Galactic Empire",
        description: "A Christmas surprise and family co-production. Deeply rooted in the retro gaming scene, Galactic Empire is a reverse-engineered version of the same 1985 game. Implemented in C and cross-compiled via CC65 into 6502 Assembly compatible .c64 executables, Galactic Empire is engineered to natively run on a VICE powered raspberry pi build into a rebuild of the original Commodore 64. Caution, similar addictive and strife sowing potential as Monopoly.",
        stack: [
            {name: "C", share: 90},
            {name: "Makefile", share: 5},
            {name: "Pixel counting", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/galactic-empire-pi"
    },
]
