import { MantineProvider } from "@mantine/core";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { ComponentType, createElement } from "react";
import { Notifications } from "@mantine/notifications";
import { theme } from "@/shared/config/mantine";

/**
 * Higher-order function that wraps a component with a MantineProvider and related context providers.
 *
 * This function takes a React component and returns a new function that renders the given component
 * within a MantineProvider. It ensures the component has access to Mantine's theme, styles, and
 * other context settings.
 *
 * @param {ComponentType} component - The React component to be wrapped with MantineProvider.
 * @returns {Function} A function that renders the input component within a MantineProvider context.
 *
 * The MantineProvider is configured with these settings:
 * - stylesTransform: Applies an Emotion transform to the styles.
 * - withCssVariables: Enables CSS variables.
 * - theme: Provides the theme to be used within MantineProvider.
 * - defaultColorScheme: Sets the default color scheme to 'light'.
 *
 * Additional Mantine contexts provided include:
 * - MantineEmotionProvider: Ensures Emotion CSS-in-JS support.
 * - Notifications: Displays notifications with limited to 3 at a time, positioned at the bottom center, with a very high zIndex.
 */
export const withMantine = (component: ComponentType) => () => {
  return (
    <MantineProvider stylesTransform={emotionTransform} withCssVariables theme={theme} defaultColorScheme="light">
      <MantineEmotionProvider>
        <Notifications limit={3} position="bottom-center" zIndex={100000} />
        {createElement(component)}
      </MantineEmotionProvider>
    </MantineProvider>
  );
};
