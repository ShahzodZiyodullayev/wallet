import { DefaultMantineColor } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

/**
 * Display a notification with a specified message and color.
 *
 * @param {string} message - The text content to be displayed in the notification.
 * @param {DefaultMantineColor} color - The color of the notification.
 */
const notify = (message: string, color: DefaultMantineColor) => {
  showNotification({
    message,
    color,
  });
};

/**
 * Handles and dispatches error notifications.
 *
 * The function takes an error, which could either be an instance of
 * Error or a string, and displays a notification with the error message.
 * The notification is displayed with a red color to indicate that it is an error message.
 *
 * @param {unknown} error - The error to be notified. This can be either an `Error` object or a `string`.
 */
const notifyError = (error: unknown) => {
  if (error instanceof Error || typeof error === "string") {
    notify(error instanceof Error ? error.message : error, "red");
  }
};

export { notify, notifyError };
