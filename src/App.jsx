import "./App.css";
import LenguagueSelector from "./components/LanguagueSelector";
import About from "./components/about";
import Sidebar from "./components/sidebar";
import CustomCursor from "./components/CustomCursor";
import CustomCursorManager from "./components/CustomCursorManager";

function App() {

  return (
    <>
      <CustomCursorManager>
          <CustomCursor />

          <div
            className="mx-auto min-h-screen max-w-screen-xl px-6 py-10 font-sans md:px-12 md:py-8 lg:px-24 lg:py-0"
          >
            <LenguagueSelector />
            <div className="lg:flex lg:justify-between lg:gap-4">
              <Sidebar />
              <div className="pt-24 lg:w-1/2 lg:py-24">
                <About />
              </div>
            </div>
          </div>
      </CustomCursorManager>
    </>
  );
}

export default App;
