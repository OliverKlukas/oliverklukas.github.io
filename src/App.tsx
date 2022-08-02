import React, {useState} from 'react';
import LandingView from "./views/LandingView";
import ProjectView from "./views/ProjectView";
import ContactView from "./views/ContactView";
import Header from "./components/Header";

/**
 * Constructs hierarchy of portfolio application.
 *
 * @constructor
 */
function App() {

    // Active menu section.
    const [activeSection, setActiveSection] = useState(0);

    // Scroll to active menu.
    const scroll = (section: string) => {
        const scrollReference = document.querySelector(section);
        console.log("here", section, scrollReference); // TODO
        if (scrollReference != null) {
            switch (section) {
                case "#landing":
                    setActiveSection(0);
                    break;
                case "#stories":
                    setActiveSection(1);
                    break;
                default:
                    setActiveSection(2);
            }
            scrollReference.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

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
