/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CardJob = ({item, onPress, detail, style}) => {
  const {company_logo, company, title, location, url} = item || {};

  return (
    <Card style={[styles.card, style]} onPress={() => onPress(item)}>
      <View style={styles.wrap}>
        <View style={{justifyContent: 'center', borderRadius: 8, flex: 0.1}}>
          <Image
            source={{uri: company_logo}}
            resizeMode={'contain'}
            style={{
              width: 66,
              height: 58,
              marginLeft: 5,
              backgroundColor: 'grey',
            }}
          />
        </View>
        <View style={[{flex: 0.8}, !detail && {marginLeft: 30}]}>
          <Text style={{fontWeight: 'bold'}}>{company} </Text>
          <Text style={{fontWeight: '500', marginVertical: 10}}>{title}</Text>
          {!detail ? (
            <Text>{location}</Text>
          ) : (
            <TouchableOpacity>
              <Text>{url}</Text>
            </TouchableOpacity>
          )}
        </View>
        {!detail && (
          <View>
            <Icon name={'navigate-next'} size={20} />
          </View>
        )}
      </View>
    </Card>
  );
};

export default CardJob;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
  },
  card: {
    marginBottom: 20,
    paddingVertical: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
  },
});
