import React, {useEffect, useState} from 'react';
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import Header from "./components/Header";
import {getWindowHeight, getScrollPosition} from "./utils/windowTweaks";

/**
 * Constructs hierarchy of portfolio application.
 *
 * @constructor
 */
function App() {

    // Continuously retrieve window dimensions and scroll position
    const screenHeight = getWindowHeight();
    const scrollPosition = getScrollPosition();
    const documentHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    // Active menu section.
    const [activeSection, setActiveSection] = useState(0);

    // Scroll to active menu.
    const scroll = (section: string) => {
        const scrollReference = document.querySelector(section);
        if (scrollReference != null) {
            scrollReference.scrollIntoView({behavior: 'smooth'});
        }
    }

    // Change active menu section based on scroll position.
    useEffect(() => {
        if(scrollPosition < screenHeight){
            setActiveSection(0);
        } else if(documentHeight - (1.5 * screenHeight) < scrollPosition){
            setActiveSection(2);
        } else{
            setActiveSection(1);
        }
    }, [scrollPosition, screenHeight]);

    // Ensure that reloads scroll to top of screen to re-trigger LoadingView.
    window.onbeforeunload = function () {
        scroll("landing");
        setActiveSection(0);
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <Header activeSection={activeSection} scroll={scroll}/>
            <div id={"landing"}><LandingView/></div>
            <div id={"stories"}><ProjectView/></div>
            <div id={"contact"}><ContactView/></div>
        </div>
    );
}

export default App;
