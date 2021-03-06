import {
  PRELOAD_STATUS_FAILED,
  PRELOAD_STATUS_REQUESTED,
  PRELOAD_STATUS_SUCCEEDED,
} from './status';

const defaultState = {
  status: PRELOAD_STATUS_REQUESTED,
};

export default (FAILED, REQUESTED, SUCCEEDED) =>
  (state = defaultState, action = {}) => {
    switch (action.type) {
      case FAILED:
        return {
          payload: action.payload,
          status: PRELOAD_STATUS_FAILED,
        };
      case REQUESTED:
        return {
          payload: action.payload,
          status: PRELOAD_STATUS_REQUESTED,
        };
      case SUCCEEDED:
        return {
          payload: action.payload,
          status: PRELOAD_STATUS_SUCCEEDED,
        };
      default:
        return state;
    }
  };
