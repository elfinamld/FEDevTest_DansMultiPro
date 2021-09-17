import React, {createRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import InputText from '../../../components/molecules/input/InputText';
import styles from './styles';

const LoginTemp = ({onSubmit}) => {
  const formData = [
    {
      name: 'Username',
      label: 'Username',
      placeholder: 'Username',
    },
    {
      name: 'Password',
      label: 'Password',
      placeholder: 'Password',
    },
  ];

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  return (
    <View>
      {formData.map((el, id) => {
        return (
          <View>
            <Controller
              key={id}
              control={control}
              name={el.name}
              defaultValue=""
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputText
                  value={value}
                  style={{marginTop: 10}}
                  label={el.label}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                />
              )}
            />
            {errors[el.name] && (
              <Text style={styles.txtError}>This is required.</Text>
            )}
          </View>
        );
      })}
      <Button
        style={styles.btn}
        labelStyle={styles.btnLabel}
        onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
    </View>
  );
};

export default LoginTemp;
