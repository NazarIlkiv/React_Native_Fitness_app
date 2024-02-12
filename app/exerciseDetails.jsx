import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import React from "react";
import Anticons from "react-native-vector-icons/AntDesign";

const excerciseDetails = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  // console.log("Excercise Details: ", item);

  return (
    <View className="flex flex-1 mt-10">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{ width: wp(100), height: wp(100) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        <Anticons name="closecircle" size={hp(3)} color="#f43f5e" />
      </TouchableOpacity>

      {/* details */}

      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
      >
        <Text
          style={{ fontSize: hp(3.5) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          {item.name}
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Equipment:{" "}
          <Text className="font-bold text-neutral-700">{item?.equipment}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Secondary Muscles:{" "}
          <Text className="font-bold text-neutral-700">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{ fontSize: hp(2) }}
          className=" text-neutral-700 tracking-wide"
        >
          Target:{" "}
          <Text className="font-bold text-neutral-700">{item?.target}</Text>
        </Text>
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-800 tracking-wide"
        >
          Instruction:
        </Text>
        {item.instructions.split(",").map((instruction, index) => {
          return (
            <Text
              key={index}
              style={{ fontSize: hp(1.7) }}
              className="text-neutral-800"
            >
              {instruction}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default excerciseDetails;
