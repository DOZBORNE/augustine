import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Text from '@theme/components/Text';
import Box from '@theme/components/Box';

type Props = {};

const LandingScreen = (props: Props) => {
  const width = Dimensions.get('window').width;
  return (
    <SafeAreaView style={[styles.container]}>
      <Box backgroundColor="testRed" flex={1} paddingHorizontal="l" justifyContent="center">
        <Text variant="boldTitle">Let's get cookin!</Text>
        <TextInput style={[styles.textInput, {}]} placeholder="use me" />
      </Box>
    </SafeAreaView>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  textInput: {
    borderRadius: 25,
    backgroundColor: '#f8f8f8',
    height: 50,
  },
});
