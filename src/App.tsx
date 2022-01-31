import React from 'react';
import LandingPage from "./pages/LandingPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
    return (
        <div className="text-standard">
            <LandingPage/>
            <ProjectPage/>
            <ContactPage/>
        </div>
    );
}

export default App;
