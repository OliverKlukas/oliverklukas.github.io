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
        tl.to(".text", {text: {value: "Hi there!"}, duration: 1.5, delay: 1,  repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "I&apos;m olli."}, duration: 1.5, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "23 years old."}, duration: 1.5, delay: 1, repeat: 1, yoyo: true, ease: "none", repeatDelay: 2});
        tl.to(".text", {text: {value: "Passionate about software, learning & bringing ideas to life."}, duration: 4, repeatDelay: 2, repeat: 1, yoyo: true, delay: 1, ease: "none"});
        tl.to(".text", {text: {value: "M.Sc. Information Systems @ TUM & Sorbonne."}, duration: 3, delay: 1, repeat: 1, repeatDelay: 2, yoyo: true, ease: "none"});
        tl.to(".text", {text: {value: "Scroll to explore."}, duration: 1.5, delay: 1, ease: "none"});
    })

    // Mouse animation for entering profile picture.
    const onEnter = ({currentTarget} : React.MouseEvent) => {
        gsap.to(currentTarget, { scale: 1.2, duration: 1, rotation: "+360", ease: "power1.out"});
    }

    // Mouse animation for leaving profile picture.
    const onLeave = ({currentTarget} : React.MouseEvent) => {
        gsap.set(currentTarget, {rotation: "+0"});
        gsap.to(currentTarget, {scale: 1});
    }

    // Mouse animation for clicking profile picture.
    const onClick = ({currentTarget} : React.MouseEvent) => {
        gsap.timeline()
            .to(currentTarget, { scale: 1.2, duration: 1, rotation: "+360", ease: "power1.out"})
            .set(currentTarget, {rotation: "+0"}, "+=2")
            .to(currentTarget, {scale: 1});
    }

    return (
            <div className="lg:grid lg:grid-cols-2 min-h-screen bg-green-4 lg:justify-center lg:items-center">
                <div className="flex justify-center py-16 mx-16 lg:justify-end lg:mr-48">
                    <img className="drop-shadow-xl" onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} src={me} alt={"me"}/>
                </div>
                <div className="mx-10 lg:m-0 lg:mr-28">
                    <span className="text text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white"/>
                    <span className="cursor inline-block text-mobile-paragraph md:text-mobile-subheading lg:text-subheading text-white">
                        |
                    </span>
                </div>
            </div>
    )
}
