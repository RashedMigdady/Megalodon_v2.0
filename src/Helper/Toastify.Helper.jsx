import { useToasts } from "react-toast-notifications";

let GlobalAddToaster = null;
export const GlobalToasterGenerator = () => {
  GlobalAddToaster = useToasts();

  return null;
};

export const showSuccess = (
  message,
  onDismiss,
  configuration = {
    appearance: 'success',
    autoDismiss: true,
    autoDismissTimeout: 4000,
  },
) => {
  if (GlobalAddToaster)
    GlobalAddToaster.addToast(message, { ...configuration, onDismiss });
};

export const showError = (
  message,
  onDismiss,
  configuration = {
    appearance: 'error',
    autoDismiss: true,
    autoDismissTimeout: 4000,
  },
) => {
  if (GlobalAddToaster)
    GlobalAddToaster.addToast(message, { ...configuration, onDismiss });
};

export const showinfo = (
  message,
  onDismiss,
  configuration = {
    appearance: 'info',
    autoDismiss: true,
    autoDismissTimeout: 4000,
  },
) => {
  if (GlobalAddToaster)
    GlobalAddToaster.addToast(message, { ...configuration, onDismiss });
};

export const showWarn = (
  message,
  onDismiss,
  configuration = {
    appearance: 'warning',
    autoDismiss: true,
    autoDismissTimeout: 4000,
  },
) => {
  if (GlobalAddToaster)
    GlobalAddToaster.addToast(message, { ...configuration, onDismiss });
};
