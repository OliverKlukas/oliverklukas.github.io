import React from 'react';

export function DownloadButton(title: string, link: string) {
    return (
        <a className="bg-white hover:bg-green-4 hover:text-white text-mobile-standard lg:text-standard text-green-5 py-2 lg:py-4 px-4 lg:px-8 border border-green-5 hover:border-green-4 rounded shadow max-w-fit" href={link} download>
            {"Download " + title}
        </a>
    )
}
