import React, {useLayoutEffect, useRef} from 'react';
import {ReactComponent as ScrollLogo} from "../asssets/ScrollLogo.svg";
import { gsap } from "gsap";

/**
 * Landing View component that introduces portfolio page.
 *
 * @constructor
 */
export default function LandingView() {
    const viewRef = useRef<HTMLDivElement>(null);

    // Fade landing view in on load.
    useLayoutEffect(() => {
        gsap.to(viewRef.current, {
            rotation: "+=360"
        })
    })

    return(
        <div className="flex flex-col min-h-screen bg-green-4 justify-evenly items-center" ref={viewRef}>
            <div/>
            <p className="text-mobile-subheading lg:text-subheading max-w-lg text-white text-center">Stories to scroll through.</p>
            <div >
                <ScrollLogo className="animate-bounce drop-shadow-xl"/>
            </div>
        </div>
    )
}