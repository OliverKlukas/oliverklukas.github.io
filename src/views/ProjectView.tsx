import React from 'react';
import remi from '../asssets/remi.gif';
import greenewal from '../asssets/greenewal-full-product.gif';
import galactic from '../asssets/GalacticEmpire.gif';
import frest from '../asssets/frest.mp4';
import ProjectDescription from "../components/ProjectDescription";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {projects} from "../utils/projects";

// Add gsap scrolling animations.
gsap.registerPlugin(ScrollTrigger);

/**
 * Lists projects including individual project descriptions and media (gifs, videos).
 *
 * @return {div}
 */
export default function ProjectView({timeline} : {timeline: gsap.core.Timeline}) {

    return (
        <div>
            <p  className="text-mobile-heading lg:text-heading pl-10">Stories.</p>
            <hr  className="border-black border bg-black ml-10 mr-10 lg:mr-20"/>
            <div className="grid lg:grid-cols-2 gap-x-6 gap-y-12 m-7 lg:m-20 items-center justify-items-center">
                <img  className="rounded-[50px] lg:rounded-[62px]" src={remi}
                     alt="Remi the Cooking Assistant"/>
                <ProjectDescription project={projects[0]} />
                <video className="lg:hidden" controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <ProjectDescription project={projects[1]} />
                <video  className="hidden lg:block object-cover" style={{width: "90%"}} controls autoPlay
                       muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <img  className="rounded-[50px] lg:rounded-[62px]" src={greenewal} alt="Greenewal"/>
                <ProjectDescription project={projects[2]} />
                <img  className="lg:hidden" style={{width: "90%"}} src={galactic}
                     alt="Galactic Empire retro game"/>
                <ProjectDescription project={projects[3]} />
                <img  className="hidden lg:block object-cover" style={{width: "90%"}} src={galactic}
                     alt="Galactic Empire retro game"/>
            </div>
        </div>
    )
}