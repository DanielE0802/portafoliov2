import "./App.css";
import LenguagueSelector from "./components/LanguagueSelector";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursorManager";
import Experience from "./components/Experience";
import Proyects from "./components/Proyects";
import proyectsData from "./data/proyects.json";

function App() {
  return (
    <>
      <CustomCursorManager>
        <CustomCursor />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 font-sans md:px-12 md:py-8 lg:px-24 lg:py-0">
          <LenguagueSelector />
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Sidebar />
            <div className="pt-24 lg:w-2/3 lg:py-24">
              <About />
              <Experience />
              <Proyects proyectsData={proyectsData} link="personal-projects"/>
            </div>
          </div>
        </div>
      </CustomCursorManager>
    </>
  );
}

export default App;
