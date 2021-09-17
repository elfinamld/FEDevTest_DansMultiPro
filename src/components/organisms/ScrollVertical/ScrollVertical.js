import React, {useEffect, useRef} from 'react';
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
  loadMore,
  itemProps,
  ...other
}) => {
  let onScroll = useRef();
  useEffect(() => {
    // if (typeof initFunc === 'function') initFunc();
    onScroll.current = false;
  }, []);
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
      onMomentumScrollEnd={() => {
        if (onScroll.current === true) {
          console.log('masuk sini');
          // loadMore();
        }
        onScroll.current = false;
      }}
      onEndReached={() => {
        onScroll.current = true;
      }}
      {...other}
    />
  );
};

export default ScrollVertical;
