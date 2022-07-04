import React from 'react';
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

/**
 * Constructs hierarchy of application.
 * @constructor
 */
function App() {
    return (
        <div>
            <LandingPage/>
            <ProjectPage/>
            <ContactPage/>
        </div>
    );
}

export default App;
