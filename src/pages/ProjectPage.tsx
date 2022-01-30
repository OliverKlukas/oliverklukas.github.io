import React from 'react';
import remi from '../asssets/remi.gif'
import galactic from '../asssets/GalacticEmpire.gif'
import frest from '../asssets/frest.mp4'
import ProjectDescription from "../components/ProjectDescription";

const projects: project[] = [
    {
        title: "Remi the Cooking Assistant",
        description: "Born out of a Hackathon in order to fascinate. A fitting project description outlining problem space, what this projects aims to solve, and how it contributes to do so. Additionally setting of project and involved parties (team, stakehodlers, ...).",
        stack: [
            {name: "GPT-3", share: 70},
            {name: "Dart", share: 25},
            {name: "Cookbooks", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/GPT-3-Recipe-Generator"
    },
    {
        title: "frest.info",
        description: "Software Engineer at Digital Product School's batch #14, a 3-month full-time program of UnternehmerTUM GmbH to gain hands-on experience in discovering business opportunities and developing digital products that users love. Together with an interdisciplinary team, we were challenged by Interhyp AG to simplify energy-efficient renovations in Germany and make them a joyful experience for homeowners. Using state-of-the-art web technologies (React.js, Node.js, Docker, Kubernetes & Google Cloud Platform), we developed a website that offers homeowners personalized advice on energy-efficient renovations and their funding opportunities, thus contributing to a more sustainable housing sector in Germany.",
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
        title: "Galactic Empire",
        description: "A christmas surprise and family co-production. A fitting project description outlining problem space, what this projects aims to solve, and how it contributes to do so. Additionally setting of project and involved parties (team, stakehodlers, ...).",
        stack: [
            {name: "C", share: 90},
            {name: "Makefile", share: 5},
            {name: "Pixel-Counting", share: 5}
        ],
        githubLink: "https://github.com/OliverKlukas/galactic-empire-pi"
    },
]

export default function ProjectPage() {
    return (
        <div>
            <p className="text-heading pl-10">Projects.</p>
            <div className="grid grid-cols-2 gap-6 m-20 items-center justify-items-center">
                <img className="rounded-[62px]" src={remi} alt="Remi the Cooking Assistant"/>
                {ProjectDescription(projects[0])}
                {ProjectDescription(projects[1])}
                <video controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <img src={galactic} alt="Galactic Empire retro game"/>
                {ProjectDescription(projects[2])}
            </div>
        </div>
    )
}