import React, {useId} from 'react';
import {LinkButton} from "./LinkButton";
import {DownloadButton} from "./DownloadButton";
import {gsap} from "gsap";

const colors = ['bg-green-5', 'bg-green-4', 'bg-green-3','bg-green-2', 'bg-green-1']

/**
 * Describes a project, provides a technology stack graph and links to more information.
 *
 * @param {project} project - Outlines title, description, stack and possible links to project.
 * @param {React.LegacyRef<HTMLDivElement>} reference - References the object in order to load GSAP animation.
 * @return {div}
 */
export default function ProjectDescription({project, reference}: {project : project, reference : React.LegacyRef<HTMLDivElement>}) {
    // Mouse animations for hovering and clicking the tech stack bar and labels.
    const onEnter = ({currentTarget} : React.MouseEvent) => {
        gsap.to(`.${currentTarget.id+"-bar"}`, { scaleY: 1.5, opacity: 0.9, duration: 1, ease: "power1.out"});
        gsap.to(`.${currentTarget.id+"-label"}`, { scale: 1.01, opacity: 0.7, duration: 1, ease: "power1.out"});
    }
    const onLeave = ({currentTarget} : React.MouseEvent) => {
        gsap.to(`.${currentTarget.id+"-bar"}`, {scale: 1, opacity: 1, duration: 1, ease: "power1.out"});
        gsap.to(`.${currentTarget.id+"-label"}`, { scale: 1, opacity: 1, duration: 1, ease: "power1.out"});
    }
    const onClick = ({currentTarget} : React.MouseEvent) => {
        gsap.timeline()
            .add("start")
            .to(`.${currentTarget.id+"-bar"}`, { scaleY: 1.5, opacity: 0.9, duration: 1, ease: "power1.out"}, "start")
            .to(`.${currentTarget.id+"-label"}`, { scale: 1.01, opacity: 0.7, duration: 1, ease: "power1.out"}, "start")
            .add("end", "+=1")
            .to(`.${currentTarget.id+"-bar"}`, {scale: 1, opacity: 1, duration: 1, ease: "power1.out"}, "end")
            .to(`.${currentTarget.id+"-label"}`, { scale: 1, opacity: 1, duration: 1, ease: "power1.out"}, "end");
    }

    // Give project unique id for mapping and animation.
    const projectId = "id-" + useId().replaceAll(":", "") + "-";

    return (
        <div className="flex flex-col lg:min-h-screen justify-center space-y-4 lg:w-[90%]" ref={reference}>
            <p className="leading-tight text-mobile-subheading lg:text-subheading">{project.title}</p>
            <p className="text-mobile-standard lg:text-standard whitespace-pre-line">{project.description}</p>
            <p className="text-mobile-paragraph lg:text-paragraph pt-2">Tech Stack</p>
            <div className="flex w-[97%]">
                {project.stack.map((item, index) => (
                    <div onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} id={projectId+index} key={projectId+"-bar-"+item.name} style={{width: `${item.share}%`}} className={`${projectId+index+"-bar"} first:rounded-l-lg last:rounded-r-lg h-4 ${colors[index]}`}/>
                ))}
            </div>
            <div className="grid lg:grid-cols-2">
                {project.stack.map((item, index) => (
                    <div onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave} id={projectId+index} key={projectId+"-label-"+item.name} className={`${projectId+index+"-label"} flex items-center space-x-2`}>
                        <div className={`w-4 h-4 rounded-full ${colors[index]}`}/>
                        <div className="text-mobile-standard lg:text-standard">{item.name}</div>
                        <div className="text-mobile-standard lg:text-standard text-grey">{" " + item.share + "%"}</div>
                    </div>
                ))}
            </div>
            <div className="flex pt-4 lg:pt-7">
                {project.githubLink != null && <LinkButton title={"GitHub"} link={project.githubLink}/>}
                {project.liveLink != null && <LinkButton title={"Live Version"} link={project.liveLink}/>}
                {project.projectVideoLink != null && <LinkButton title={"Project Video"} link={project.projectVideoLink}/>}
                {project.pitchLink != null && <DownloadButton title={"Pitch"} link={project.pitchLink}/>}
            </div>
        </div>
    );
}