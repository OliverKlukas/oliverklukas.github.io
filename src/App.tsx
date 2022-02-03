import React from 'react';
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <div>
            <LandingPage/>
            <ProjectPage/>
            <AboutPage/>
            <ContactPage/>
        </div>
    );
}

export default App;
