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

    // gsap timeline
    const [tl] = useState(() => gsap.timeline());

    // Trigger animation for texts writing.
    useLayoutEffect(() => {
        gsap.fromTo(".cursor", {autoAlpha: 0, x: -10}, {autoAlpha: 1, duration: 0.7, repeat: -1, ease: "steps (1)"});
        tl.to(".text", {text: {value: "Hi there!"}, duration: 1.5, delay: 2,  repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "I&apos;m olli."}, duration: 1.5, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "23 years old."}, duration: 1.5, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "Passionate about tech, learning & bringing ideas to life."}, duration: 4, repeatDelay: 2, delay: 1, repeat: 1, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "M.Sc. Information Systems @ TUM."}, duration: 3, delay: 1, repeat: 1, repeatDelay: 2, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "Scroll to explore."}, duration: 1.5, ease: "none"});
    })

    return (
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-green-4 justify-evenly items-center">
                <div className="flex justify-evenly">
                    <img src={me} alt={"me"}/>
                </div>
                <div>
                    <span className="text text-mobile-subheading lg:text-subheading text-white"/>
                    <span className="cursor inline-block text-mobile-subheading lg:text-subheading max-w-lg text-white">
                        |
                    </span>
                </div>
            </div>
    )
}