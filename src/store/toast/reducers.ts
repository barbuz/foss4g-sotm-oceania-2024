import { Initialized, Success } from '@abraham/remotedata';
import { initialToastState, ToastState } from './state';
import { HIDE_TOAST, SHOW_TOAST, ToastActionTypes } from './types';

export const toastReducer = (state = initialToastState, action: ToastActionTypes): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return new Success(action.payload);

    case HIDE_TOAST:
      return new Initialized();

    default:
      return state;
  }
};
