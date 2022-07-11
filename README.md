# My Portfolio

Continuously evolving collection of cool projects I've done in the past, some random anecdotes and a playground to try out new ideas live on the web. :surfer:

## Check it out
[![portfolio](https://user-images.githubusercontent.com/39443615/178349061-d1f95273-d675-4b39-8db3-6cbe4d8d03cc.gif)](https://oliverklukas.github.io/)

## Tech stack
1. React with TypeScript as the backbone
2. Tailwind CSS to make things look good
3. GSAP for everything that moves
4. Deployment via GitHub Pages

# Technical documentation

## Prerequisites
- React.js: ^17.x
- Node.js: ^16.x

## Run commands
```shell
# Run locally at http://localhost:3000/
npm install
npm start
```

## Deploy commands
```shell
# Run deployment script to https://oliverklukas.github.io/ via gh-pages branch
npm run deploy
```

## Project structure
```shell
.
├── build
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
├── README.md
├── src
│   ├── App.tsx                                 # main file
│   ├── asssets                                 # graphics & static files
│   ├── components                              # recurrent components from design system
│   ├── index.css                         
│   ├── index.tsx 
│   ├── react-app-env.d.ts                      # enables video files
│   ├── utils                                   # small static content & single functions
│   └── views                                   # main view components
├── tailwind.config.js                          # tailwind theme 
└── tsconfig.json                               # typescript compile config
```
