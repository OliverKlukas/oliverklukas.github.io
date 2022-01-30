import React from 'react';

export function LinkButton(title: string, link: string) {
    return (
        <a className="bg-white hover:bg-green-4 hover:text-white text-standard text-green-5 py-4 px-8 border border-green-5 hover:border-green-4 rounded shadow max-w-fit" href={link}>{title}</a>
    )
}
