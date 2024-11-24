import { Button, Card, createTheme, TextInput } from "@mantine/core";

/**
 * Configures the theme settings for the application.
 *
 * @type {object}
 * @property {object} colors - Color scheme configuration.
 * @property {Array<string>} colors.light-dark - Array of color values used in the "light-dark" theme.
 * @property {object} components - Custom component configurations.
 * @property {object} components.Card - Custom configuration for the Card component.
 * @property {object} components.Card.defaultProps - Default properties for the Card component.
 * @property {number} components.Card.defaultProps.radius - Default border radius for the Card component.
 * @property {object} components.TextInput - Custom configuration for the TextInput component.
 * @property {object} components.TextInput.defaultProps - Default properties for the TextInput component.
 * @property {number} components.TextInput.defaultProps.radius - Default border radius for the TextInput component.
 * @property {object} components.Button - Custom configuration for the Button component.
 * @property {object} components.Button.defaultProps - Default properties for the Button component.
 * @property {string} components.Button.defaultProps.variant - Default variant style for the Button component.
 * @property {number} components.Button.defaultProps.radius - Default border radius for the Button component.
 * @property {object} components.Button.styles - Custom style overrides for the Button component.
 * @property {object} components.Button.styles.root - Root style properties for the Button component.
 * @property {string} components.Button.styles.root.transition - Transition effect for the Button component.
 */
export const theme = createTheme({
  colors: {
    "light-dark": ["#7AD1DD", "#5FCCDB", "#44CADC", "#2AC9DE", "#1AC2D9", "#11B7CD", "#09ADC3", "#0E99AC", "#128797", "#147885"],
  },
  components: {
    Card: Card.extend({
      defaultProps: {
        radius: 7,
      },
    }),

    TextInput: TextInput.extend({
      defaultProps: {
        radius: 7,
      },
    }),

    Button: Button.extend({
      defaultProps: {
        variant: "filled",
        radius: 7,
      },
      styles: {
        root: { transition: "all 300ms" },
      },
    }),
  },
});
