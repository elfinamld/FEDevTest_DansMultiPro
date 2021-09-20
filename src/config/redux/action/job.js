import * as types from '../types';

export const fetch_list_job = payload => ({
  type: types.job.LIST_JOB_LC,
  payload,
});

export const set_list_job = payload => ({
  type: types.job.LIST_JOB_RD,
  payload: {key: 'job_list', ...payload},
});
