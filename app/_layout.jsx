import { View, Text, LogBox } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  LogBox.ignoreLogs([
    "Warning: Failed prop type: Invalid prop `source` supplied to `Image`, expected one of type",
  ]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercises"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciseDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default _layout;
