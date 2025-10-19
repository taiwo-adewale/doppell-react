import { useCallback } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

/**
 * A hook that provides a function to update URL query string parameters.
 * @returns {(name: string, value: string, pathname?: string) => void} A function that updates a query parameter in the URL.
 * @example
 * ```tsx
 * function FilterComponent() {
 *   const updateQuery = useUpdateQueryString();
 *
 *   const handleFilterChange = (filter: string) => {
 *     updateQuery("category", filter);
 *     // URL: /products?category=electronics
 *   };
 *
 *   const handleFilterWithPath = (filter: string) => {
 *     updateQuery("category", filter, "/search");
 *     // URL: /search?category=electronics
 *   };
 *
 *   return (
 *     <button onClick={() => handleFilterChange("electronics")}>
 *       Filter Electronics
 *     </button>
 *   );
 * }
 * ```
 * @remarks
 * - Preserves existing query parameters (only updates the specified parameter).
 * - Preserves location state.
 * - Does not scroll to top after navigation (`preventScrollReset: false`).
 * - Uses `navigate` with `replace: false`, so the navigation is added to browser history.
 * - If the same parameter exists, it will be overwritten with the new value.
 */
export function useUpdateQueryString() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const updateQueryString = useCallback(
    (name: string, value: string, pathname?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      navigate(
        {
          pathname: pathname || location.pathname,
          search: params.toString(),
        },
        {
          replace: false,
          state: location.state,
          preventScrollReset: false,
        }
      );
    },
    [location.pathname, location.state, navigate, searchParams]
  );

  return updateQueryString;
}
