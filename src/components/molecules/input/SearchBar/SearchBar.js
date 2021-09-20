/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo';
import InputText from '../InputText';

const SearchBar = ({onChange, onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <InputText style={{flex: 1}} onChangeText={onChange} adorStart />
      <TouchableRipple
        centered
        borderless
        style={{
          height: 40,
          width: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          borderRadius: 40 / 2,
        }}
        onPress={onPress}>
        <Icon name={'chevron-down'} size={20} />
      </TouchableRipple>
    </View>
  );
};

export default SearchBar;
