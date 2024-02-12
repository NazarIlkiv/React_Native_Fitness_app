import { View, Text } from "react-native";
import React from "react";

const excerciseDetails = () => {
  const item = useLocalSearchParams();
  console.log("Excercise Details: ", item);

  return (
    <View>
      <Text>excerciseDetails</Text>
    </View>
  );
};

export default excerciseDetails;
