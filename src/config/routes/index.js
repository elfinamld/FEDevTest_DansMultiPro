import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {listScreens, screens} from './listScreens';

const Stack = createNativeStackNavigator();

const NavigatorApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.login}>
        {listScreens.map((el, id) => {
          return (
            <Stack.Screen key={id} name={el.name} component={el.component} />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatorApp;
