import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';

const Item = ({text, title}) => {
  return (
    <View style={{marginTop: 20}}>
      <Text style={{color: 'grey'}}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
};

const CardDetailJob = ({item}) => {
  const {title, type, description} = item || {};
  return (
    <View
      style={{
        marginBottom: 50,
      }}>
      <Text>Job Spesification</Text>
      <Card
        style={{
          padding: 15,
          borderColor: 'grey',
          borderWidth: 1,
          borderRadius: 8,
          marginTop: 20,
        }}>
        <Item title={'Title'} text={title} />
        <Item title={'Fulltime'} text={type ? 'Yes' : 'No'} />
        <Item title={'Description'} text={description} />
      </Card>
    </View>
  );
};

export default CardDetailJob;
