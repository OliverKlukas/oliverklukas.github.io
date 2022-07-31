import React, {useLayoutEffect, useRef, useState} from 'react';
import YearCard from "../components/YearCard";
import {gsap} from "gsap";
import {cards} from "../utils/cards";

/**
 * Page loading animation that throws cards of yearly life events.
 *
 * @constructor
 */
export default function LoadingView({timeline} : {timeline: gsap.core.Timeline}) {
    // Remove loading view via hook after animation.
    const [active, setActive] = useState(true);

    // Ensure that animation can't be skipped.
    document.body.style.overflow = active ? "hidden" : "visible";

    // Gsap reference and class selector.
    const el = useRef(null);
    const q = gsap.utils.selector(el);

    // Trigger gsap animation on opening screen.
    useLayoutEffect(() => {
        // @ts-ignore
        timeline.set(
            q(".card"),
            {opacity: 0}
        )
        timeline.to(q(".card"),{
            x: "random(0, 100)" + "vw",
            y: "random([-100, 150])" + "vh",
            onUpdate: () => {
                window.scrollTo(0, 0);
            },
        });
        timeline.to(q(".card"), {
            x: "40vw",
            y: "25vh",
            opacity: 1,
            stagger: {
                amount: 8,
                ease: "power4.out"
            },
        });
        timeline.to(q(".card"), {
            x: "random(-200, 200)" + "vw",
            y: "random(-200, 200)" + "vh",
            duration: 2,
            opacity: 0,
            onComplete: () => setActive(false),
        }, "+=2");
    });

    return (
        active ? <div className={"h-screen"} ref={el}>
            {cards.map((card, index) => (
                <div key={index} className={"card"}>
                    <YearCard year={card.year} anecdote={card.anecdote}/>
                </div>
            ))}
        </div> : null
    );
}