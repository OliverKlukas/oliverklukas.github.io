import React from 'react';
import {ReactComponent as ScrollLogo} from "../asssets/ScrollLogo.svg";

/**
 * Landing View component that introduces portfolio page.
 *
 * @constructor
 */
export default function LandingView() {
    return(
        <div className="flex flex-col min-h-screen bg-green-4 justify-evenly items-center">
            <div/>
            <p className="text-mobile-subheading lg:text-subheading max-w-lg text-white text-center">Stories to scroll through.</p>
            <div >
                <ScrollLogo className="animate-bounce drop-shadow-xl"/>
            </div>
        </div>
    )
}