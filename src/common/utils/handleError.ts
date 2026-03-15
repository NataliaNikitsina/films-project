import type {FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {errorToast} from '@/common/utils/errorToast.ts';
import {isErrorWithProperty} from '@/common/utils/isErrorWithProperty.ts';
import {isErrorWithDetailArray} from '@/common/utils/isErrorWithDetailArray.ts';
import {trimToMaxLength} from '@/common/utils/trimToMaxLength.ts';

export const handleErrors = (error: FetchBaseQueryError | undefined) => {
  if (error) {
    switch (error.status) {
      case 'CUSTOM_ERROR':
      case 'FETCH_ERROR':
      case 'PARSING_ERROR':
      case 'TIMEOUT_ERROR':
        errorToast(error.error);
        break;
      case 429:
      case 401:
      case 404:
        if (isErrorWithProperty(error.data, 'status_message')) {
          errorToast(error.data.status_message);
        } else {
          errorToast(JSON.stringify(error.data));
        }
        break;

      case 403:
        if (isErrorWithDetailArray(error.data)) {
          errorToast(trimToMaxLength(error.data.errors[0].detail));
        } else {
          errorToast(JSON.stringify(error.data));
        }
        break;

      case 400:
        if (isErrorWithDetailArray(error.data)) {
          const errMessage = error.data.errors[0].detail;
          if (errMessage.includes('refreshToken')) return;
          errorToast(trimToMaxLength(errMessage));
        } else {
          errorToast(JSON.stringify(error.data));
        }
        break;

      default:
        if (error.status >= 500 && error.status < 600) {
          errorToast('Server error occurred. Please try again later.');
        } else {
          errorToast('Some error occurred');
        }
    }
  }
};
