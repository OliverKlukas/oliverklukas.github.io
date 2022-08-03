import React from 'react';
import {ReactComponent as LinkedInLogo} from "./../asssets/LinkedInLogo.svg";
import {ReactComponent as GitHubLogo} from "./../asssets/GitHubLogo.svg";

/**
 * Contact view component including links to socials.
 *
 * @constructor
 */
export default function ContactView() {
    return (
        <div className="flex flex-col bg-white min-h-screen justify-center space-y-14 lg:space-y-28 items-center">
            <div className="text-center">
                <p className="text-mobile-heading lg:text-heading">The end.</p>
                <p className="text-mobile-standard lg:text-standard mt-4 ml-4 mr-4 lg:max-w-4xl">That&apos;s it,
                    you&apos;ve reached the end... at least for now! Do you want to collaborate or talk about an idea? Want to grab
                    a coffee and discuss art, music or code? Then drop me a message on LinkedIn or check out my other
                    projects on GitHub. See ya!</p>
            </div>
            <div className="flex space-x-9 lg:space-x-20">
                <a href="https://github.com/OliverKlukas" target={"_blank"} rel="noreferrer">
                    <GitHubLogo className="hover:scale-110 ease-in duration-500 h-24 lg:h-32 hover:opacity-80 drop-shadow-xl"/>
                </a>
                <a href="https://www.linkedin.com/in/oliver-klukas/" target={"_blank"} rel="noreferrer">
                    <LinkedInLogo className="hover:scale-110 ease-in duration-500 h-24 lg:h-32 hover:opacity-80 drop-shadow-xl"/>
                </a>
            </div>
        </div>
    )
}