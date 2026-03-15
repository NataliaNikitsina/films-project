import {toast} from 'react-toastify';

export const errorToast = (message: string, error?: unknown) => {
  toast(message, {type: 'error', position: 'bottom-right'});

  if (error) {
    console.error(`${message}\n`, error);
  }
};
