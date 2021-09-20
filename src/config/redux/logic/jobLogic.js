import axios from 'axios';
import {createLogic} from 'redux-logic';
import {set_list_job} from '../action/job';
import {URL} from '../app_config';
import * as types from '../types';

export const fetchListJob = createLogic({
  type: types.job.LIST_JOB_LC,
  latest: true,
  validate({getState, action}, allow, reject) {
    const {isLoggedIn} = getState().authReducer;
    console.log(isLoggedIn);
    if (isLoggedIn) {
      console.log('masuk');
      allow(action);
    } else {
      reject(action);
    }
  },
  process({getState, action}, dispatch, done) {
    const {payload} = action;
    console.log(URL);
    // axios({
    //   method: 'get',
    //   url: 'http://bit.ly/2mTM3nY',
    //   responseType: 'stream'
    // })
    //   .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });
    // console.log(
    //   axios({
    //     method: 'GET',
    //     url: URL,
    //     data: {},
    //   }),
    // );
    axios({
      method: 'get',
      url: URL,
    })
      .then(resp => {
        console.log(resp);
        dispatch(set_list_job(resp));
      })
      .catch(error => {
        console.log(error);
      })
      .then(done);
  },
});
