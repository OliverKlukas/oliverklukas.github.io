import React from 'react';
import YearCard from "../components/YearCard";
import {getRandomInt} from "../utils/random";

export default function LoadingPage() {

    let rotation : string[] = ['rotate-2', 'rotate-6', 'rotate-12', 'rotate-0', '-rotate-2', '-rotate-6', '-rotate-12'];

    let lifeCards = [
        YearCard(rotation[getRandomInt(7)], '1998', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '1999', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2000', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2001', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2002', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2003', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2004', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2005', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2006', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2007', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2008', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2009', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2010', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2011', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2012', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2013', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2014', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2015', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2016', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2017', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2018', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2019', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2020', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2021', 'the journey begins.'),
        YearCard(rotation[getRandomInt(7)], '2022', 'the journey begins.'),
    ];

    return (
        <>
            {lifeCards}
        </>
    );
}
