import React from 'react';
import {LinkedInLogo} from "../asssets/SVGs";
import github from "../asssets/GitHubLogo.png"

export default function ContactPage() {
    return(
        <div className="flex flex-col min-h-screen justify-center space-y-28 items-center">
            <div className="text-center">
                <p className="text-heading">The end.</p>
                <p className="text-standard max-w-4xl">That's it, you've reached the end... at least for now! Do you want to collaborate or talk about an idea? Want to grab a coffee and discuss art, music and bug fixing? Then drop me a line below or follow me on GitHub. See ya!</p>
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