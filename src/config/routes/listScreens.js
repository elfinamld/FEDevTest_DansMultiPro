import * as Page from '../../containers/pages';

export const screens = {
  login: 'Login',
  job_list: 'Job List',
  job_detail: 'Job Detail',
};

export const listScreens = [
  {
    name: screens.login,
    component: Page.LoginPage,
  },
  {
    name: screens.job_list,
    component: Page.JobListPage,
  },
  {
    name: screens.job_detail,
    component: Page.JobDetailPage,
  },
];
