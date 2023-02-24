import React from "react";
import TerminalButton from "./TerminalButton";

/**
 * Header menu with scroll functionality.
 *
 * @param {number} activeSection - Section number indicating which menu item to be selected.
 * @param {void} scroll - Function to scroll to correct component in app.
 * @constructor
 */
function Header({activeSection, scroll} : {activeSection : number, scroll : (section : string) => void}){

    return(
        <div className={`flex justify-between text-mobile-standard ${activeSection == 0 ? "text-white bg-green-4" : "text-black bg-white"} sticky top-0 z-50 px-2 lg:px-4 py-1 lg:py-1.5`}>
            <TerminalButton activeSection={activeSection}/>
            <div className="flex flex-row gap-2 lg:gap-4">
                <button onClick={() => scroll("#landing")} className={`${activeSection == 0 && "font-bold"}`}>.me()</button>
                <button onClick={() => scroll("#stories")} className={`${activeSection == 1 && "font-bold"}`}>.stories()</button>
                <button onClick={() => scroll("#contact")} className={`${activeSection == 2 && "font-bold"}`}>.contact()</button>
            </div>
        </div>
    )
}

export default Header;