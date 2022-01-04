import React from 'react';

export default function YearCard(rotation : string, year : string, anecdote : string) {

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className={`grid grid-cols-1 bg-white content-center gap-10 ${rotation} h-[472px] w-[333px] border-[#02242D] border-[15px] rounded-lg shadow-2xl`}>
                <p className="text-subheading text-center font-standard">{year}</p>
                <p className="text-standard text-center font-standard">{anecdote}</p>
            </div>
        </div>
    );
}
