import React from 'react';
import {LinkedInLogo} from "../asssets/SVGs";
import github from "../asssets/GitHubLogo.png"

export default function ContactPage() {
    return(
        <div className="flex flex-col h-screen justify-center space-y-28 items-center">
            <div className="text-center">
                <p className="text-heading">Let's talk.</p>
                <p className="text-standard max-w-4xl">Some text where I outline that they can contact me on the three platforms, that I'm open to collaboration and to enjoy life! Some text where I outline that they can contact me on the three platforms, that I'm open to collaboration and to enjoy life!</p>
            </div>
            <div className="flex space-x-20">
                <a href="https://github.com/OliverKlukas">
                    <img src={github}/>
                </a>
                <a href="https://www.linkedin.com/in/oliver-klukas/">
                    <LinkedInLogo/>
                </a>

            </div>
        </div>
    )
}