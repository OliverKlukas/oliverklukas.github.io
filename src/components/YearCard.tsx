import React from 'react';

/**
 * Single year card used for loading screen animation.
 *
 * @param {{rotation : string, year : string, anecdote : string}} props - Year and anecdote that should be displayed on card and the rotation the cards is thrown at.
 * @constructor
 */
export default function YearCard(props: {rotation : string, year : string, anecdote : string}) {
    return (
        <div className="">
            <div className={`grid grid-cols-1 bg-white content-center gap-10 ${props.rotation} h-[472px] w-[333px] border-[#02242D] border-[15px] rounded-lg shadow-2xl`}>
                <p className="text-subheading text-center">{props.year}</p>
                <p className="text-standard text-center">{props.anecdote}</p>
            </div>
        </div>
    );
}