// src/hooks/use-mobile.tsx
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Create media query list for mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Handler function to update state
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Set initial value
    onChange();
    
    // Listen for changes
    mql.addEventListener("change", onChange);
    
    // Cleanup listener on unmount
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Always return a boolean (false as fallback if state is still undefined)
  return !!isMobile;
}