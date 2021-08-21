/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from "react-native";
import ShakeText from "./lib/ShakeText";

const App = () => {
  let shakeTextRef: ShakeText | null = null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ShakeText ref={(ref: any) => (shakeTextRef = ref)}>Shake Text</ShakeText>
      <Button
        title="Shake Text"
        style={{
          height: 50,
          width: "90%",
          backgroundColor: "blue",
          borderRadius: 12,
        }}
        onPress={() => {
          shakeTextRef?.startShakeAnimation();
        }}
      />
    </SafeAreaView>
  );
};

export default App;
