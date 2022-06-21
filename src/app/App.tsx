import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LandingScreen } from './Authentication';
import { useFonts } from 'expo-font';
import { ThemeProvider } from '@shopify/restyle';
import theme from '@theme/theme';

type RootStackParamList = {
  Landing: undefined;
};

export default function App() {
  const [loaded] = useFonts({
    'inter-thin': require('@assets/fonts/Inter-Thin.ttf'),
    'inter-light': require('@assets/fonts/Inter-Light.ttf'),
    'inter-regular': require('@assets/fonts/Inter-Regular.ttf'),
    'inter-medium': require('@assets/fonts/Inter-Medium.ttf'),
    'inter-semi': require('@assets/fonts/Inter-SemiBold.ttf'),
    'inter-bold': require('@assets/fonts/Inter-Bold.ttf'),
  });

  if (!loaded) return null;

  const RootStack = createNativeStackNavigator<RootStackParamList>();
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootStack.Navigator>
            <RootStack.Group screenOptions={{ headerShown: false }}>
              <RootStack.Screen name="Landing" component={LandingScreen} />
            </RootStack.Group>
          </RootStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
