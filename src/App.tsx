import React, {useState} from 'react';
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import LoadingView from "./views/LoadingView";
import { gsap } from "gsap";

/**
 * Constructs hierarchy of portfolio application.
 * 
 * @constructor
 */
function App() {
    // Define global timeline.
    const [tl] = useState(() => gsap.timeline());

    // Ensure that reloads scroll to top of screen to re-trigger LoadingView.
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <LoadingView timeline={tl}/>
            <LandingView />
            <ProjectView timeline={tl}/>
            <ContactView />
        </div>
    );
}

export default App;
