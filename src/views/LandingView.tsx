import React, {useLayoutEffect, useState} from 'react';
import me from './../asssets/me.png'
import {gsap} from "gsap";
import {TextPlugin} from "gsap/TextPlugin";

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
        tl.to(".text", {text: {value: "Hi there!"}, duration: 1.5, delay: 1,  repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "I&apos;m Olli."}, duration: 1.5, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "24 years old & based in Munich, Germany."}, duration: 3.1, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "Passionate about software, learning & bringing ideas to life."}, duration: 4, repeatDelay: 2, repeat: 1, yoyo: true, delay: 1, ease: "none"});
        tl.to(".text", {text: {value: "M.Sc. Information Systems @ TUM & Sorbonne Université."}, duration: 3.8, delay: 1, repeat: 1, repeatDelay: 2, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "Scroll to explore."}, duration: 1.5, delay: 1, ease: "none", onComplete: () => setFirstAnimationActive(false)});
    }, []);

    return (
            <div className="min-h-screen bg-green-4 lg:grid lg:grid-cols-2 lg:justify-center lg:items-center">
                <div className="flex justify-center py-16 mx-16 lg:justify-end lg:mr-48">
                    <img className="drop-shadow-xl hover:scale-110 hover:rotate-[360deg] ease-in duration-1000" src={me} alt={"profile picture"}/>
                </div>
                <div className="flex justify-center text-center lg:justify-start lg:flex-none lg:text-left mx-10 lg:m-0 lg:mr-28">
                    <span>
                        <span className="text text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white"/>
                        {firstAnimationActive && <span className="cursor inline-block text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white">
                            |
                        </span>}
                    </span>
                </div>
            </div>
    )
}
