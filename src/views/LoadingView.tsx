import React, {useLayoutEffect, useRef, useState} from 'react';
import YearCard from "../components/YearCard";
import {gsap} from "gsap";
import {cards} from "../utils/cards";

/**
 * Page loading animation that throws cards of yearly life events.
 *
 * @constructor
 */
export default function LoadingView() {
    // Remove loading view via hook after animation.
    const [active, setActive] = useState(true);

    // Ensure that animation can't be skipped.
    document.body.style.overflow = active ? "hidden" : "visible";

    // Gsap reference and class selector.
    const el = useRef(null);
    const q = gsap.utils.selector(el);
    const tl = useRef<gsap.core.Timeline>(null);

    // Trigger gsap animation on opening screen.
    useLayoutEffect(() => {
        // @ts-ignore
        tl.current = gsap.timeline();
        tl.current.add(gsap.set(q(".card"),{
            x: "random(-30, 130)" + "vw",
            y: "random([-100, 150])" + "vh",
        }));
        tl.current.add(gsap.to(q(".card"), {
            x: "40vw",
            y: "25vh",
            stagger: {
                amount: 8,
                ease: "power4.out"
            },
        }));
        tl.current.add(gsap.to(q(".card"), {
            x: "random(-200, 200)" + "vw",
            y: "random(-200, 200)" + "vh",
            duration: 2,
            opacity: 0,
            onComplete: () => setActive(false),
        }), "+=2");
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