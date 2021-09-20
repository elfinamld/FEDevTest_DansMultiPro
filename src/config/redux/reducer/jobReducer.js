import * as types from '../types';

const initialState = {
  job_list: [],
  job_detail: {},
};

const jobReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case types.job.LIST_JOB_RD: {
      const {key, ...other} = payload;
      return {
        ...state,
        [key]: {...state[key], ...other},
      };
    }
    default: {
      return state;
    }
  }
};

export default jobReducer;
