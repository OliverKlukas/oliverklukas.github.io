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
        tl.to(".text", {text: {value: "Passionate about software, learning & bringing ideas to life."}, duration: 4, repeatDelay: 2, repeat: 1, yoyo: true, delay: 1, ease: "none"});
        tl.to(".text", {text: {value: "M.Sc. Information Systems @ TUM & Sorbonne."}, duration: 3, delay: 1, repeat: 1, repeatDelay: 2, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "Scroll to explore."}, duration: 1.5, ease: "none"});
    })

    return (
            <div className="lg:grid lg:grid-cols-2 min-h-screen bg-green-4 lg:justify-center lg:items-center">
                <p className="lg:hidden text-mobile-heading text-white pl-10">Portfolio.</p>
                <hr className="lg:hidden border-white border mx-10 mb-12"/>
                <div className="flex justify-center my-8 mx-16 lg:justify-end lg:mr-48">
                    <img className="drop-shadow-xl" src={me} alt={"me"}/>
                </div>
                <div className="mx-10 lg:m-0 lg:mr-28">
                    <span className="text text-mobile-subheading lg:text-subheading text-white"/>
                    <span className="cursor inline-block text-mobile-subheading lg:text-subheading text-white">
                        |
                    </span>
                </div>
            </div>
    )
}