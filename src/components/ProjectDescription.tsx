import React from 'react';
import stackDummy from '../asssets/stack_dummy.png'

type technology = {
    name: string;
    share: number;
};

export default function ProjectDescription(title : string, description : string, stack : technology[], githubLink? : string, liveLink? : string) {
    return (
        <div className="flex flex-col">
            <p className="text-subheading">{title}</p>
            <p className="text-standard">{description}</p>
            <p className="text-paragraph">Tech Stack</p>
            <img src={stackDummy}/>
        </div>
    );
}
