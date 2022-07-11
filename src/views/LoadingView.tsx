import React from 'react';
import YearCard from "../components/YearCard";
import {getRandomInt} from "../utils/random";

/**
 * Page loading animation that throws cards of yearly life events.
 *
 * @constructor
 */
export default function LoadingView() {

    const rotation : string[] = ['rotate-2', 'rotate-6', 'rotate-12', 'rotate-0', '-rotate-2', '-rotate-6', '-rotate-12'];

    const lifeCards = [
        {year: "1998", anecdote: "the journey begins"},
        {year: "1999", anecdote: "the journey begins"},
        {year: "2000", anecdote: "the journey begins"},
        {year: "2001", anecdote: "the journey begins"},
        {year: "2002", anecdote: "the journey begins"},
        {year: "2003", anecdote: "the journey begins"},
        {year: "2004", anecdote: "the journey begins"},
        {year: "2005", anecdote: "the journey begins"},
        {year: "2006", anecdote: "the journey begins"},
        {year: "2007", anecdote: "the journey begins"},
        {year: "2008", anecdote: "the journey begins"},
        {year: "2009", anecdote: "the journey begins"},
        {year: "2010", anecdote: "the journey begins"},
        {year: "2011", anecdote: "the journey begins"},
        {year: "2012", anecdote: "the journey begins"},
        {year: "2013", anecdote: "the journey begins"},
        {year: "2014", anecdote: "the journey begins"},
        {year: "2015", anecdote: "the journey begins"},
        {year: "2016", anecdote: "the journey begins"},
        {year: "2017", anecdote: "the journey begins"},
        {year: "2018", anecdote: "the journey begins"},
        {year: "2019", anecdote: "the journey begins"},
        {year: "2020", anecdote: "the journey begins"},
        {year: "2021", anecdote: "the journey begins"},
        {year: "2022", anecdote: "the journey begins"},
    ];

    return (
        <div>
            {lifeCards.map((card, index) => <YearCard key={index} rotation={rotation[getRandomInt(7)]} year={card.year} anecdote={card.anecdote}/>)}
        </div>
    );
}