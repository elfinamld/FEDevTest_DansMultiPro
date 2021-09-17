import React from 'react';
import {View, Text, FlatList} from 'react-native';
import * as Components from '../../molecules/card';

const _renderCard = ({component, index, item, itemProps}) => {
  const Component = Components[component];
  return (
    <Component
      id={index}
      key={index}
      item={item}
      index={index}
      {...itemProps}
    />
  );
};

const ScrollVertical = ({
  style,
  component,
  render,
  contentContainerStyle,
  data,
  itemProps,
  ...other
}) => {
  const renderItem = others => _renderCard({component, itemProps, ...others});

  return (
    <FlatList
      style={style}
      pagingEnabled={false}
      keyExtractor={(item, index) => index.toString()}
      renderItem={render || renderItem}
      contentContainerStyle={contentContainerStyle}
      data={data}
      showsVerticalScrollIndicator={false}
      legacyImplementation={false}
      {...other}
    />
  );
};

export default ScrollVertical;
