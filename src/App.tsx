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
