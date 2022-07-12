import React, {useEffect, useRef} from 'react';
import YearCard from "../components/YearCard";
import {getRandomInt} from "../utils/random";
import {gsap} from "gsap";
import {cards} from "../utils/cards";

/**
 * Page loading animation that throws cards of yearly life events.
 *
 * @constructor
 */
export default function LoadingView() {

    const el = useRef(null);
    const q = gsap.utils.selector(el);

    useEffect(() => {
        gsap.to(q(".card"), {
            x: 1000,
            stagger: 0.33,
            repeat: -1,
            repeatDelay: 1,
            yoyo: true
        });
    }, []);

    const rotation : string[] = ['rotate-2', 'rotate-6', 'rotate-12', 'rotate-0', '-rotate-2', '-rotate-6', '-rotate-12'];

    return (
        <div className={"h-screen"} ref={el}>
            {cards.map((card, index) => (
                <div key={index} className={"card"}>
                    <YearCard
                        rotation={rotation[getRandomInt(7)]} year={card.year} anecdote={card.anecdote}/>
                </div>
            ))}
        </div>
    );
}