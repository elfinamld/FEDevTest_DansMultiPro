import React from 'react';
import {View, Text} from 'react-native';
import {CardJob} from '../../molecules/card';
import CardDetailJob from '../../molecules/card/CardDetailJob/CardDetailJob';

const JobDetail = ({item}) => {
  console.log(item);
  return (
    <View>
      <Text>Company</Text>
      <CardJob detail item={item.item} style={{marginTop: 20}} />
      <CardDetailJob {...item} />
    </View>
  );
};

export default JobDetail;
