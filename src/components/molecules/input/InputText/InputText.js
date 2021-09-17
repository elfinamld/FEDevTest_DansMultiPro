/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
const InputText = ({
  style,
  onBlur,
  onChangeText,
  value,
  onSubmitEditing,
  label,
  adorStart,
  ...props
}) => {
  return (
    <View style={[style]}>
      <Text style={{marginBottom: 5}}>{label}</Text>
      <View
        style={[
          {
            borderColor: 'black',
            borderWidth: 1,
            marginTop: 3,
            overflow: 'hidden',
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
          },
        ]}>
        {adorStart && (
          <View style={{position: 'absolute', zIndex: 99, left: 5}}>
            <Icon name={'search'} size={20} />
          </View>
        )}
        <TextInput
          onBlur={onBlur}
          value={value}
          style={{
            height: 50,
            overflow: 'hidden',
            flex: 1,
            paddingLeft: adorStart ? 25 : 5,
          }}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          {...props}
        />
      </View>
    </View>
  );
};

export default InputText;
