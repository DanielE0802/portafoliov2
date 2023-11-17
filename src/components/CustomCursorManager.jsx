import { useState } from "react";
import CustomCursorContext from "../context/CustomCursorContext";
import PropTypes from "prop-types";

const CustomCursorManager = ({ children }) => {
  const [type, setType] = useState("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

CustomCursorManager.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomCursorManager;