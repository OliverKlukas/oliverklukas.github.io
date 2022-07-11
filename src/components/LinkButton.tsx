import React from 'react';

/**
 * Button that opens supplied href link in a new tab.
 *
 * @param {{ title: string, link: string }} props - Title of button and link that should be linked to.
 * @constructor
 */
export function LinkButton(props: { title: string, link: string }) {
    return (
        <a className="bg-white hover:bg-green-4 hover:text-white text-mobile-standard lg:text-standard text-green-5 py-2 lg:py-4 px-4 lg:px-8 border border-green-5 hover:border-green-4 rounded shadow max-w-fit" target="_blank" rel="noreferrer" href={props.link}>{props.title}</a>
    )
}
