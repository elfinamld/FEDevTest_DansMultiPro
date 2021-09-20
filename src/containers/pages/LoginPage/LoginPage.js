import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {screens} from '../../../config/routes/listScreens';
import LoginTemp from '../../templates/LoginTemp';
import styles from './styles';
import {set_login} from '../../../config/redux/action/auth';

class LoginPage extends Component {
  _handleSubmit = data => {
    const {navigation, set_login} = this.props;
    set_login();
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

const mapDispatch = {
  set_login,
};
export default connect(null, mapDispatch)(LoginPage);
