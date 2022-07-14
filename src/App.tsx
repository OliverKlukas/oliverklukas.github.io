import React from 'react';
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import LoadingView from "./views/LoadingView";

/**
 * Constructs hierarchy of portfolio application.
 * 
 * @constructor
 */
function App() {

    // Ensure that reloads scroll to top of screen to re-trigger LoadingView.
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    return (
        <div>
            <LoadingView/>
            <LandingView/>
            <ProjectView/>
            <ContactView/>
        </div>
    );
}

export default App;
