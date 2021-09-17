import axios from 'axios';
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import JobList from '../../../components/organisms/JobList';
import {fetch_list_job} from '../../../config/redux/action/job';
import {ListData} from '../../../config/redux/url/ListData';
import {screens} from '../../../config/routes/listScreens';
class JobListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getMoviesFromApi();
  }

  getMoviesFromApi = () => {
    axios
      .get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      .then(response => console.log(response));
  };

  render() {
    const {navigation} = this.props;
    console.log('list', ListData);
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
        <JobList
          handleNext={id => navigation.navigate(screens.job_detail, {id})}
        />
      </View>
    );
  }
}

const mapState = state => ({
  job_list: state.jobReducer.job_list,
});

const mapDispatch = {
  fetch_list_job,
};

export default connect(mapState, mapDispatch)(JobListPage);
