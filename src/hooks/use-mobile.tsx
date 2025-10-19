import { useState, useEffect } from "react";

const DESKTOP_BREAKPOINT = 1024;

/**
 * A hook that detects if the current viewport is mobile-sized.
 * @returns {boolean} `true` if the viewport width is less than 1024px (mobile/tablet), `false` otherwise (desktop).
 * @example
 * ```tsx
 * function MyComponent() {
 *   const isMobile = useIsMobile();
 *
 *   return (
 *     <div>
 *       {isMobile ? <MobileMenu /> : <DesktopMenu />}
 *     </div>
 *   );
 * }
 * ```
 * @remarks
 * - The breakpoint is set at 1024px (Tailwind's `lg` breakpoint).
 * - This hook listens to window resize events and updates accordingly.
 * - Returns `false` during SSR (when `window` is undefined).
 */
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < DESKTOP_BREAKPOINT
      : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};
