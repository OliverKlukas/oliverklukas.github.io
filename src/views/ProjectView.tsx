import React, {useLayoutEffect, useRef} from 'react';
import remi from '../asssets/remi.gif';
import greenewal from '../asssets/greenewal-full-product.gif';
import galactic from '../asssets/GalacticEmpire.gif';
import frest from '../asssets/frest.mp4';
import peakFocusMp4 from '../asssets/PEAKFocus.mp4';
import ProjectDescription from "../components/ProjectDescription";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {projects} from "../data/projects";

// Add gsap scrolling animations.
gsap.registerPlugin(ScrollTrigger);

/**
 * Lists projects including individual project descriptions and media (gifs, videos).
 *
 * @return {div}
 */
export default function ProjectView() {
    // Define gsap scrolling reference.
    const revealRefs = useRef([]);
    revealRefs.current = [];

    useLayoutEffect(() => {
        revealRefs.current.forEach((el, index) => {
            gsap.fromTo(el, {
                autoAlpha: 0
            }, {
                duration: 2,
                autoAlpha: 1,
                ease: 'none',
                scrollTrigger: {
                    id: `section-${index + 1}`,
                    trigger: el,
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                }
            });
        });
    }, []);

    // Adds new elements to gsap animation reference.
    const addToRefs = (elem: any) => {
        // @ts-ignore
        if (elem && !revealRefs.current.includes(elem)) {
            // @ts-ignore
            revealRefs.current.push(elem);
        }
    };

    return (
        <div className="bg-white">
            <p ref={addToRefs} className="text-mobile-heading lg:text-heading pl-10">Stories.</p>
            <hr ref={addToRefs} className="border-black border bg-black ml-10 mr-10 lg:mr-20"/>
            <div className="hidden lg:grid grid-cols-2 gap-x-6 gap-y-12 m-20 items-center justify-items-center">
                <img ref={addToRefs} className="rounded-[62px]" src={remi} alt="Remi the Cooking Assistant"/>
                <ProjectDescription project={projects[0]} reference={addToRefs}/>

                <ProjectDescription project={projects[1]} reference={addToRefs}/>
                <div className="w-auto h-90vh rounded-[105px] overflow-hidden">
                    <video ref={addToRefs} className="h-full w-full" style={{ clipPath: 'inset(0.2cm 0.55cm 0.1cm 0.7cm)' }} controls autoPlay muted loop>
                        <source src={peakFocusMp4} type='video/mp4' />
                    </video>
                </div>

                <video ref={addToRefs} className="object-cover" style={{width: "90%"}} controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <ProjectDescription project={projects[2]} reference={addToRefs}/>

                <ProjectDescription project={projects[3]} reference={addToRefs}/>
                <iframe width="90%" height="45%"
                        src="https://www.youtube-nocookie.com/embed/R5Rs-sDh5Es?controls=0&amp;start=1407"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>

                <img ref={addToRefs} className="rounded-[62px]" src={greenewal} alt="Greenewal"/>
                <ProjectDescription project={projects[4]} reference={addToRefs}/>

                <ProjectDescription project={projects[5]} reference={addToRefs}/>
                <img ref={addToRefs} className="mb-10 object-cover" style={{width: "90%"}} src={galactic} alt="Galactic Empire retro game"/>
            </div>
            <div className="lg:hidden grid gap-x-6 gap-y-12 m-7 items-center justify-items-center">
                <img ref={addToRefs} className="rounded-[50px]" src={remi} alt="Remi the Cooking Assistant"/>
                <ProjectDescription project={projects[0]} reference={addToRefs}/>
                <hr ref={addToRefs} className="bg-black border-black w-full border bg-black ml-10 mr-10"/>

                <div className="w-auto h-90vh rounded-[105px] overflow-hidden">
                    <video ref={addToRefs} className="h-full w-full" style={{ clipPath: 'inset(0.2cm 0.55cm 0.1cm 0.7cm)' }} controls autoPlay muted loop>
                        <source src={peakFocusMp4} type='video/mp4' />
                    </video>
                </div>
                <ProjectDescription project={projects[1]} reference={addToRefs}/>
                <hr ref={addToRefs} className="bg-black border-black w-full border bg-black ml-10 mr-10"/>

                <video controls autoPlay muted loop>
                    <source src={frest} type='video/mp4'/>
                </video>
                <ProjectDescription project={projects[2]} reference={addToRefs}/>
                <hr ref={addToRefs} className="bg-black border-black w-full border bg-black ml-10 mr-10"/>

                <iframe width="95%" height="100%"
                        src="https://www.youtube-nocookie.com/embed/R5Rs-sDh5Es?controls=0&amp;start=1407"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <ProjectDescription project={projects[3]} reference={addToRefs}/>
                <hr ref={addToRefs} className="bg-black border-black w-full border bg-black ml-10 mr-10"/>

                <img ref={addToRefs} className="rounded-[50px]" src={greenewal} alt="Greenewal"/>
                <ProjectDescription project={projects[4]} reference={addToRefs}/>
                <hr ref={addToRefs} className="bg-black border-black w-full border bg-black ml-10 mr-10"/>

                <img ref={addToRefs} style={{width: "90%"}} src={galactic} alt="Galactic Empire retro game"/>
                <ProjectDescription project={projects[5]} reference={addToRefs}/>
            </div>
        </div>
    )
}
