import { useEffect, useCallback } from "react";

/**
 * Custom hook for handling Escape key presses.
 * @param {Function} onEscape - Callback function to run when Escape is pressed
 */
export function useEscapeKey(onEscape) {
  // Ensure stable callback reference for proper cleanup
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onEscape?.();
      }
    },
    [onEscape]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
}
