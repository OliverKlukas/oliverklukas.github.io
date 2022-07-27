import React from 'react';
import {LinkButton} from "./LinkButton";
import {DownloadButton} from "./DownloadButton";

const colors = ['bg-green-5', 'bg-green-4', 'bg-green-3','bg-green-2', 'bg-green-1']

/**
 * Describes a project, provides a technology stack graph and links to more information.
 *
 * @param {project} project - Outlines title, description, stack and possible links to project.
 * @param {React.LegacyRef<HTMLDivElement>} reference - References the object in order to load GSAP animation.
 * @return {div}
 */
export default function ProjectDescription({project, reference}: {project : project, reference : React.LegacyRef<HTMLDivElement>}) {
    return (
        <div className="flex flex-col lg:min-h-screen justify-center space-y-4 lg:w-[90%]" ref={reference}>
            <p className="leading-tight text-mobile-subheading lg:text-subheading">{project.title}</p>
            <p className="text-mobile-standard lg:text-standard whitespace-pre-line">{project.description}</p>
            <p className="text-mobile-paragraph lg:text-paragraph pt-2">Tech Stack</p>
            <div className="flex w-[97%]">
                {project.stack.map((item, index) => (
                    <div key={index} style={{width: `${item.share}%`}} className={`first:rounded-l-lg last:rounded-r-lg h-4 ${colors[index]}`}/>
                ))}
            </div>
            <div className="grid grid-cols-2">
                {project.stack.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${colors[index]}`}/>
                        <div className="text-mobile-standard lg:text-standard">{item.name}</div>
                        <div className="text-mobile-standard lg:text-standard text-grey">{" " + item.share + "%"}</div>
                    </div>
                ))}
            </div>
            <div className="flex pt-4 lg:pt-7">
                {project.githubLink != null && <LinkButton title={"GitHub"} link={project.githubLink}/>}
                {project.liveLink != null && <LinkButton title={"Live Version"} link={project.liveLink}/>}
                {project.pitchLink != null && <DownloadButton title={"Download"} link={project.pitchLink}/>}
            </div>
        </div>
    );
}
