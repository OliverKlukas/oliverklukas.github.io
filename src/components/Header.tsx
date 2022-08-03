import React from "react";

/**
 * Header menu with scroll functionality.
 *
 * @param {number} activeSection - Section number indicating which menu item to be selected.
 * @param {void} scroll - Function to scroll to correct component in app.
 * @constructor
 */
function Header({activeSection, scroll} : {activeSection : number, scroll : (section : string) => void}){

    return(
        <div className={`flex text-mobile-standard ${activeSection == 0 ? "text-white bg-green-4" : "text-black bg-white"} gap-2 lg:gap-4 justify-end sticky top-0 z-50 pr-2 lg:pr-4 py-1 lg:py-1.5`}>
            <button onClick={() => scroll("#landing")} className={`${activeSection == 0 && "font-bold"}`}>.me()</button>
            <button onClick={() => scroll("#stories")} className={`${activeSection == 1 && "font-bold"}`}>.stories()</button>
            <button onClick={() => scroll("#contact")} className={`${activeSection == 2 && "font-bold"}`}>.contact()</button>
        </div>
    )
}

export default Header;