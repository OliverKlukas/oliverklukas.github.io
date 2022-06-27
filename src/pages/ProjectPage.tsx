import React, {useEffect, useRef} from 'react';
import remi from '../asssets/remi.gif';
import greenewal from '../asssets/greenewal-full-product.gif';
import galactic from '../asssets/GalacticEmpire.gif';
import frest from '../asssets/frest.mp4';
import ProjectDescription from "../components/ProjectDescription";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";
import {projects} from "../utils/projects";
gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {

    const revealRefs = useRef([]);
    revealRefs.current = [];

    useEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 1,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index+1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, []);

    const addToRefs = (elem: any) => {
        // @ts-ignore
        if (elem && !revealRefs.current.includes(elem)) {
            // @ts-ignore
            revealRefs.current.push(elem);
        }
    };

    return (
        <div>
            <p ref={addToRefs} className="text-mobile-heading md:text-heading pl-10">Stories.</p>
            <hr ref={addToRefs} className="border-black border bg-black ml-10 mr-10 md:mr-20"/>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-12 m-7 md:m-20 items-center justify-items-center">
                {/*FIRST ITEM: left aligned image*/}
                <img ref={addToRefs} className="rounded-[50px] md:rounded-[62px]" src={remi} alt="Remi the Cooking Assistant"/>
                {ProjectDescription(projects[0], addToRefs)}
                {/*SECOND ITEM: right aligned image*/}
                <video className="md:hidden" controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                {ProjectDescription(projects[1], addToRefs)}
                <video ref={addToRefs} className="hidden md:block object-cover" style={{width: "90%"}} controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                {/*THIRD ITEM: left aligned image*/}
                <img ref={addToRefs} className="rounded-[50px] md:rounded-[62px]" src={greenewal} alt="Greenewal"/>
                {ProjectDescription(projects[2], addToRefs)}
                {/*FOURTH ITEM: right aligned image*/}
                <img ref={addToRefs} className="md:hidden" style={{width: "90%"}} src={galactic} alt="Galactic Empire retro game"/>
                {ProjectDescription(projects[3], addToRefs)}
                <img ref={addToRefs} className="hidden md:block object-cover" style={{width: "90%"}} src={galactic} alt="Galactic Empire retro game"/>
            </div>
        </div>
    )
}