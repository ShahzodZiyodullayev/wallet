import { RouterProvider } from "react-router-dom";
import { Router } from "./app-router";
import { withProviders } from "./providers";

/**
 * Handles the application root component.
 * This component sets up an event listener to blur the active element
 * if it is a number input field whenever the wheel event is detected.
 * This is to prevent accidental value changes in number inputs due to scrolling.
 *
 * @returns {JSX.Element} The root element of the application with the RouterProvider.
 */
const _Root = (): JSX.Element => {
  document.addEventListener("wheel", () => {
    const activeElement = document.activeElement as HTMLInputElement;
    if (activeElement && activeElement.type === "number") {
      activeElement.blur();
    }
  });

  return <RouterProvider router={Router()} />;
};
/**
 * Root is a higher-order component (HOC) that enhances the basic _Root component with additional providers.
 * This typically includes adding context providers or other global services that need to be available throughout
 * the component tree.
 *
 * @param {React.ComponentType} _Root - The base component that gets wrapped by additional providers.
 * @returns {React.ComponentType} - The enhanced component wrapped with providers.
 */
export const Root = withProviders(_Root);
