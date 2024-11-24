import { CopyButton, Button } from "@mantine/core";
import { IconCopyPlusFilled } from "@tabler/icons-react";
import { TCopyButtonProps } from "@/shared/types";
import classes from "./Copy-button.module.css";

/**
 * A functional component that renders a button to copy a given value.
 *
 * The WCopyButton component utilizes the CopyButton component to provide
 * copy-to-clipboard functionality. It displays a button with text indicating
 * whether the value has been copied or not.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.value - The full value to be copied to the clipboard.
 * @param {string} props.shortValue - The shortened value to be displayed on the button.
 * @returns {React.Element} - The WCopyButton component.
 */
const WCopyButton = ({ value, shortValue }: TCopyButtonProps) => {
  return (
    <CopyButton value={value}>
      {({ copied, copy }: { copied: any; copy: any }) => (
        <Button
          className={classes.WAccountAddressButton}
          variant="transparent"
          color={copied ? "teal" : "blue"}
          onClick={copy}
          rightSection={<IconCopyPlusFilled size={16} />}>
          {copied ? "Copied address" : shortValue}
        </Button>
      )}
    </CopyButton>
  );
};

export default WCopyButton;
