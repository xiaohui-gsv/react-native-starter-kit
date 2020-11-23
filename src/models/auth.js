import moment from 'moment';
import Api from '../lib/api';
import HandleErrorMessage from '../lib/format-error-messages';
import { errorMessages, successMessages } from '../constants/messages';
import pagination from '../lib/pagination';

export default {
  namespace: 'auth',

  /**
   *  Initial state
   */
  state: [],

  /**
   * Effects/Actions
   */
  effects: (dispatch) => ({}),

  /**
   * Reducers
   */
  reducers: {
    SignIn(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
    Logout(state) {
      return {};
    },
  },
};
