import React from 'react';
import {Switch, Text, View} from 'react-native';
import {Button, Card} from 'react-native-paper';
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
        <Button
          onPres={onPress}
          labelStyle={{
            paddingHorizontal: 10,
            paddingVertical: 5,
            color: 'white',
          }}
          style={{
            marginTop: 20,
            borderRadius: 8,
            backgroundColor: 'orange',
          }}>
          Apply Filter
        </Button>
      </View>
    </Card>
  );
};

export default CardSwitch;
