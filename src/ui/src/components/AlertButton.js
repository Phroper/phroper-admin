import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";

/**
 * Button that displays an AlertDialog on click.
 * Calls onClick function only if dialog is accepted.
 *
 * @param {object} props
 * @param props.message Body of the Alert dialdog
 * @param props.headerText Header content of Alert dialog
 * @param [props.acceptText="Ok"] Content of accept button
 * @param [props.cancelText="Cancel"] Content of cancel button
 * @param {Function} props.onClick Accept callback of dialog
 */
export default function AlertButton({
  message,
  children,
  onClick,
  acceptText = "Ok",
  cancelText = "Cancel",
  headerText = "",
  ...props
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef();

  return (
    <>
      <Button colorScheme="red" {...props} onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            {headerText && (
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {headerText}
              </AlertDialogHeader>
            )}
            <AlertDialogBody>{message}</AlertDialogBody>
            <AlertDialogFooter>
              <HStack w="100%" justifyContent="space-between">
                <Button ref={cancelRef} onClick={onClose}>
                  {cancelText}
                </Button>
                <Button
                  colorScheme="red"
                  onClick={(...p) => {
                    onClose();
                    if (onClick) onClick(...p);
                  }}
                  ml={3}
                >
                  {acceptText}
                </Button>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
