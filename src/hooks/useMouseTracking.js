import { useEffect, useRef } from "react";

/**
 * Custom hook for mouse tracking and cursor animation
 * @param {Function} onMouseMove - Callback function called on mouse move
 * @returns {Object} - Object containing mouse position refs and cursors refs
 */
export const useMouseTracking = (onMouseMove) => {
  const secondaryCursor = useRef(null);
  const mainCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      
      if (onMouseMove) {
        onMouseMove(clientX, clientY);
      }

      if (secondaryCursor.current && mainCursor.current) {
        positionRef.current.mouseX = 
          clientX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY = 
          clientY - secondaryCursor.current.clientHeight / 2;
        
        mainCursor.current.style.transform = 
          `translate3d(${clientX - mainCursor.current.clientWidth / 2}px, ${clientY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [onMouseMove]);

  return {
    secondaryCursor,
    mainCursor,
    positionRef,
  };
};

/**
 * Custom hook for smooth cursor following animation
 * @param {Object} positionRef - Reference to position object
 * @param {Object} secondaryCursor - Reference to secondary cursor element
 */
export const useCursorAnimation = (positionRef, secondaryCursor) => {
  useEffect(() => {
    const currentPositionRef = positionRef.current;
    
    const followMouse = () => {
      if (!currentPositionRef || !secondaryCursor.current) return;
      
      currentPositionRef.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = currentPositionRef;

      if (!destinationX || !destinationY) {
        currentPositionRef.destinationX = mouseX;
        currentPositionRef.destinationY = mouseY;
      } else {
        currentPositionRef.distanceX = (mouseX - destinationX) * 0.1;
        currentPositionRef.distanceY = (mouseY - destinationY) * 0.1;
        
        if (
          Math.abs(currentPositionRef.distanceX) +
          Math.abs(currentPositionRef.distanceY) < 0.1
        ) {
          currentPositionRef.destinationX = mouseX;
          currentPositionRef.destinationY = mouseY;
        } else {
          currentPositionRef.destinationX += distanceX;
          currentPositionRef.destinationY += distanceY;
        }
      }
      
      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = 
          `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    
    followMouse();
    
    return () => {
      if (currentPositionRef?.key && currentPositionRef.key !== -1) {
        cancelAnimationFrame(currentPositionRef.key);
      }
    };
  }, [positionRef, secondaryCursor]);
};
