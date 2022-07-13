import React, {useEffect, useRef, useState} from 'react';
import YearCard from "../components/YearCard";
import {gsap} from "gsap";
import {cards} from "../utils/cards";
import {getRandomInt} from "../utils/random";

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

    // Exit loading view after additional delay.
    const exitLoadingView = () => {
        setTimeout(() => setActive(false), 3000);
    }

    // Trigger gsap animation on opening screen.
    useEffect(() => {
        gsap.to(q(".card"), {
            x: "40vw",
            y: "25vh",
            opacity: 1,
            stagger: {
                amount: 10,
                ease: "power4.out"
            },
            onComplete: exitLoadingView,
        });
    });

    return (
        active ? <div className={"h-screen"} ref={el}>
            {cards.map((card, index) => (
                <div key={index} className={"card"} style={{opacity: 0}}>
                    <YearCard
                        rotation={getRandomInt(7)} year={card.year} anecdote={card.anecdote}/>
                </div>
            ))}
        </div> : null
    );
}