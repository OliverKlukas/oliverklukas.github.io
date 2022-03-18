import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import profile from "../asssets/profile_pic.png";
gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const panels = useRef([]);
    const panelsContainer = useRef<HTMLDivElement>(null);

    const createPanelsRefs = (panel: HTMLElement | null, index: number) => {
        // @ts-ignore
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;

        // @ts-ignore
        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current!.offsetWidth
            }
        });
    }, []);

    return (
        <div className="bg-green-4 text-white">
            <p className="text-mobile-heading md:text-heading pl-10">About.</p>
            <hr className="border border-white bg-white ml-10 mr-10 md:mr-20"/>
            <div className="flex w-[300%] h-screen" ref={panelsContainer}>
                <div className="w-screen" ref={(e) => createPanelsRefs(e, 0)}>
                    <div className="flex justify-center items-center h-screen space-x-40">
                        <div className="max-w-2xl">
                            <p className="text-mobile-subheading md:text-subheading">Hi there.</p>
                            <p className="text-mobile-standard md:text-standard">I’m Oliver Klukas, this is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals. This is a funny self-description of myself, my passions, my occupation as a software engineer and student, as well as my skills and (learning) goals.</p>
                        </div>
                        <img src={profile} alt="Profile Picture"/>
                    </div>
                </div>
                <div className="w-screen" ref={(e) => createPanelsRefs(e, 1)}>
                    <p className="text-mobile-subheading md:text-subheading">Skills.</p>
                </div>
                <div className="w-screen" ref={(e) => createPanelsRefs(e, 2)}>
                    <p className="text-mobile-subheading md:text-subheading">Experience.</p>
                    <div>

                    </div>
                    <p className="text-mobile-subheading md:text-subheading">Education.</p>
                </div>
            </div>
        </div>
    );
}
