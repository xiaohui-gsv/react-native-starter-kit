import moment from 'moment';
import Api from '../lib/api';

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
