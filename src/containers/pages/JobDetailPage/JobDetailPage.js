/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import JobDetail from '../../../components/organisms/JobDetail/JobDetail';

class JobDetailPage extends Component {
  render() {
    const {route} = this.props;
    console.log(route);
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: 'white',
          padding: 15,
        }}>
        <JobDetail item={route.params} />
      </ScrollView>
    );
  }
}

export default JobDetailPage;
