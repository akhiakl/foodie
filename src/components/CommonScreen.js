import React from 'react';
import {
  Divider, Icon, Layout, TopNavigation, TopNavigationAction,
} from '@ui-kitten/components';
import { SafeAreaView, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  safeAreaView: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
const BackIcon = (props) => (
  <Icon {...props} name="arrow-back" />
);
const CommonScreen = ({ children, title, backActive }) => {
  const navigation = useNavigation();
  const navigateBack = () => {
    navigation.goBack();
  };
  const backButton = () => (
    backActive ? <TopNavigationAction icon={BackIcon} onPress={navigateBack} /> : null
  );
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TopNavigation
        title={title}
        accessoryLeft={backButton}
        alignment="center"
      />
      <Divider />
      <Layout style={styles.container}>
        {children}
      </Layout>
    </SafeAreaView>
  );
};

CommonScreen.propTypes = {
  title: PropTypes.string.isRequired,
  backActive: PropTypes.bool,
};

CommonScreen.defaultProps = {
  backActive: true,
};

export default CommonScreen;
