import { useContext } from "react";
import CustomCursorContext from "../context/CustomCursorContext";
import { useMouseTracking, useCursorAnimation } from "../hooks/useMouseTracking";

/**
 * CustomCursor component that provides an animated cursor effect
 * @returns {JSX.Element} Custom cursor elements
 */
const CustomCursor = () => {
  const { type } = useContext(CustomCursorContext);
  
  const { secondaryCursor, mainCursor, positionRef } = useMouseTracking();
  
  useCursorAnimation(positionRef, secondaryCursor);

  return (
    <div className={`cursor-wrapper ${type}`}>
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </div>
  );
};

export default CustomCursor;