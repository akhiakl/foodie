import React, { useState } from 'react';
import { View } from 'react-native';
import {
  Avatar,
  Button, Card, Divider, ListItem, Modal, StyleService, Text, useStyleSheet,
} from '@ui-kitten/components';
import { useSelector } from 'react-redux';
import { getThemeName } from '../../App/themeSlice';
import CommonScreen from '../../components/CommonScreen';
import proImage from '../../assets/150.png';
import CapitalizedText from '../../components/styled/CapitalizedText';

const themeStyles = StyleService.create({
  editButton: {
    width: '100%',
  },
  capitalize: {
    textTransform: 'uppercase',
  },
  settings: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'border-primary-color-1',
    overflow: 'hidden',
  },
  profileDetails: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    borderColor: 'border-primary-color-1',
    alignItems: 'center',
  },
  proPic: {
    borderColor: 'border-primary-color-1',
    borderWidth: 2,
    width: 85,
    height: 85,
    marginBottom: 20,
  },
});

const SettingsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const styles = useStyleSheet(themeStyles);
  const theme = useSelector(getThemeName);

  return (
    <CommonScreen backActive={false} title="Settings">
      <Button style={styles.editButton} appearance="ghost">Edit</Button>
      <View style={styles.profileDetails}>
        <Avatar
          size="giant"
          style={styles.proPic}
          source={proImage}
        />
        <Text category="h4">Akhi AKL</Text>
      </View>
      <View style={styles.settings}>
        <ListItem
          title="Theme"
          onPress={() => navigation.navigate('ThemeSettings')}
          description={(evaProps) => (
            <CapitalizedText
              style={styles.capitalize}
              {...evaProps}
            >
              {theme}
            </CapitalizedText>
          )}
        />
        <Divider />
      </View>
    </CommonScreen>
  );
};

export default SettingsScreen;
