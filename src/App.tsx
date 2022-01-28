import React from 'react';
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <div className="font-standard">
            <LandingPage/>
            <ProjectPage/>
            <AboutPage/>
            <ContactPage/>
        </div>
    );
}

export default App;
