import "./App.css";
import LanguageSelector from "./components/LanguagueSelector";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursorManager";
import Experience from "./components/Experience";
import Proyects from "./components/Proyects";
import { SkipNavigation } from "./components/ui";
import proyectsData from "./data/proyects.json";

/**
 * Main App component that renders the portfolio layout
 * @returns {JSX.Element} Complete portfolio application
 */
function App() {
  return (
    <CustomCursorManager>
      <SkipNavigation />
      <CustomCursor />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 font-sans md:px-12 md:py-8 lg:px-24 lg:py-0">
        <LanguageSelector />
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main 
            id="main-content"
            className="pt-24 lg:w-2/3 lg:py-24"
            tabIndex="-1"
            role="main"
            aria-label="Main content"
          >
            <About />
            <Experience />
            <Proyects proyectsData={proyectsData} link="personal-projects" />
          </main>
        </div>
      </div>
    </CustomCursorManager>
  );
}

export default App;
