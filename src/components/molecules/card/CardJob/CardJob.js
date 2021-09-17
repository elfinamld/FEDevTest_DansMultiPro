import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

const CardJob = ({item, onPress}) => {
  const {company_logo, company, title, location, id} = item || {};

  return (
    <Card
      style={{marginBottom: 20, paddingVertical: 10}}
      onPress={() => onPress(id)}>
      <View style={styles.wrap}>
        <View style={{width: 66, height: 58}}>
          <Image
            source={{uri: company_logo}}
            resizeMode={'contain'}
            style={{width: 66, height: 58, backgroundColor: 'grey'}}
          />
        </View>
        <View style={{flex: 1, marginLeft: 30}}>
          <Text>{company} </Text>
          <Text>{title}</Text>
          <Text>{location}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Icon name={'next'} size={20} />
        </View>
      </View>
    </Card>
  );
};

export default CardJob;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
});
