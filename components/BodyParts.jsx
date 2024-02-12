import { View, Text, FlatList } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyPartsImages } from "../constants/Images";
import BodyPartCard from "./BodyPartCard";
import { useRouter } from "expo-router";

const BodyPars = () => {
  const router = useRouter();
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>

      <FlatList
        data={bodyPartsImages}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 50 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} router={router} item={item} />
        )}
      />
    </View>
  );
};

export default BodyPars;
