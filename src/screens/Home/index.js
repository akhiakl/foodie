import React from 'react';
import {
  Button,
} from '@ui-kitten/components';
import CommonScreen from '../../components/CommonScreen';

const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <CommonScreen backActive={false} title="Home">
      <Button onPress={navigateDetails}>OPEN DETAILS</Button>
    </CommonScreen>
  );
};
export default HomeScreen;
