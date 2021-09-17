import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';

const InputText = ({
  style,
  onBlur,
  onChangeText,
  value,
  onSubmitEditing,
  label,
  ...props
}) => {
  return (
    <View style={style}>
      <Text style={{marginBottom: 5}}>{label}</Text>
      <TextInput
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        {...props}
      />
    </View>
  );
};

export default InputText;
