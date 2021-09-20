import axios from 'axios';
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import JobList from '../../../components/organisms/JobList';
import {fetch_list_job} from '../../../config/redux/action/job';
import {screens} from '../../../config/routes/listScreens';
import styles from './styles';
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

    return (
      <View style={styles.wrapper}>
        <JobList
          handleNext={item => navigation.navigate(screens.job_detail, {item})}
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
