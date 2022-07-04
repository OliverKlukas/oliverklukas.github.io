import React from 'react';
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";

/**
 * Constructs hierarchy of application.
 * @constructor
 */
function App() {
    return (
        <div>
            <LandingView/>
            <ProjectView/>
            <ContactView/>
        </div>
    );
}

export default App;
