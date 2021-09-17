import React, {Component} from 'react';
import {View} from 'react-native';
import {screens} from '../../../config/routes/listScreens';
import LoginTemp from '../../templates/LoginTemp';
import styles from './styles';

class LoginPage extends Component {
  _handleSubmit = data => {
    const {navigation} = this.props;
    navigation.navigate(screens.job_list);
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <LoginTemp onSubmit={this._handleSubmit} />
      </View>
    );
  }
}

export default LoginPage;
