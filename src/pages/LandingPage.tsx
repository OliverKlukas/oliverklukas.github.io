import React from 'react';
import {ScrollLogo} from "../asssets/SVGs";

export default function LandingPage() {
    return(
        <div className="flex flex-col h-screen justify-evenly items-center">
            <div/>
            <p className="text-subheading max-w-md text-center">A story to scroll through.</p>
            <div className="">
                <ScrollLogo/>
            </div>
        </div>
    )
}