import React from 'react';
import { Divider, ListItem } from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { setTheme, THEME } from '../../App/themeSlice';
import CommonScreen from '../../components/CommonScreen';
import CapitalizedText from '../../components/styled/CapitalizedText';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

const ThemeSettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const selectTheme = (theme) => {
    dispatch(setTheme(theme));
    navigation.goBack();
  };
  return (
    <CommonScreen title="Theme">
      {Object
        .values(THEME)
        .map((item, index) => (
          <View style={styles.container} key={`item${String(index)}`}>
            {index !== 0 ? <Divider /> : null}
            <ListItem
              onPress={() => selectTheme(item)}
              title={(evaProps) => (<CapitalizedText {...evaProps}>{item}</CapitalizedText>)}
            />
          </View>
        ))}
    </CommonScreen>
  );
};

export default ThemeSettingsScreen;
