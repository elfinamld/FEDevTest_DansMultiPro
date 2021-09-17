/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-paper';
import InputText from '../../input/InputText';

const CardSwitch = ({value, onValueChange, onChange, onPress}) => {
  return (
    <Card
      style={{
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginTop: 20,
        borderColor: 'grey',
        borderWidth: 1,
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Full Time</Text>
        <Switch value={value} onValueChange={onValueChange} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>Location</Text>
        <InputText style={{width: 200}} onChangeText={onChange} />
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPres={() => onPress('text')}
          style={{
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 8,
            backgroundColor: 'orange',
          }}>
          <Text style={{color: 'white'}}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default CardSwitch;
