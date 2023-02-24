import React from "react";

/**
 * Opens terminal view.
 *
 * @param {number} activeSection - Current active section of website.
 * @constructor
 */
export default function TerminalButton({activeSection}: {activeSection: number}){
    return (
        <button className={`${activeSection == 0 ? "bg-white text-green-4" : "bg-green-4 text-white"} rounded-lg px-2.5 py-0.5 font-bold`}>{">_"}</button>
    )
}