import React, {useLayoutEffect, useState} from 'react';
import me from './../asssets/me.png'
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {ReactComponent as ScrollLogo} from "../asssets/ScrollLogo.svg";

// Add gsap text animation plugin.
gsap.registerPlugin(TextPlugin);

/**
 * Landing View component that introduces portfolio page.
 *
 * @constructor
 */
export default function LandingView() {

    // GSAP timeline for animation.
    const [tl] = useState(() => gsap.timeline());

    // Add state hook for cursor.
    const [firstAnimationActive, setFirstAnimationActive] = useState(true);

    // Trigger animation for texts writing.
    useLayoutEffect(() => {
        firstAnimationActive && gsap.fromTo(".cursor", {autoAlpha: 0, x: -10}, {autoAlpha: 1, duration: 0.7, repeat: -1, ease: "steps (1)"});
        tl.to(".text", {text: {value: "Hi there!"}, duration: 0.5, delay: 0.75,  repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "I&apos;m Olli."}, duration: 0.5, delay: 0.75, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "26 years old & based in Munich, Germany."}, duration: 1.75, delay: 0.75, repeat: 1, yoyo: true, ease: "none", repeatDelay: 3});
        tl.to(".text", {text: {value: "Passionate about software, learning & bringing ideas to life."}, duration: 2, repeatDelay: 4, repeat: 1, yoyo: true, delay: 0.75, ease: "none"});
        tl.to(".text", {text: {value: "M.Sc. Information Systems @ TUM & Sorbonne Université."}, duration: 2, delay: 0.75, repeat: 1, repeatDelay: 4, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "Scroll to explore."}, duration: 0.75, delay: 0.75, ease: "none", onComplete: () => setFirstAnimationActive(false)});
        tl.to(".bouncer", {opacity: 1, duration: 5, ease: "power2"});
    }, []);

    return (
        <div className="grid min-h-screen bg-green-4 lg:grid-cols-2 lg:justify-center lg:items-center">
                <div className="flex justify-center pt-20 lg:pb-16 lg:pt-44 mx-16 lg:justify-end lg:mr-48">
                    <img className="drop-shadow-xl h-fit hover:scale-110 hover:rotate-[360deg] ease-in duration-1000" src={me} alt={"profile picture"}/>
                </div>
                <div className="flex justify-center lg:pb-16 lg:pt-44 text-center lg:justify-start lg:flex-none lg:text-left mx-10 lg:m-0 lg:mr-28">
                    <span>
                        <span className="text text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white"/>
                        {firstAnimationActive && <span className="cursor inline-block text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white">
                            |
                        </span>}
                    </span>
                </div>
                <div className="bouncer opacity-0 flex lg:col-span-2 justify-center">
                    <ScrollLogo className="animate-bounce drop-shadow-xl"/>
                </div>
            </div>
    )
}
