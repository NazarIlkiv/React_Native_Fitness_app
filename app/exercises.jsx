import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { StatusBar } from "expo-status-bar";
import { useRouter, useLocalSearchParams } from "expo-router";
import { fetchExercisesByBodyPart } from "../api/exercisesDB";
import { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { demoBodyPart } from "../constants/Images";

export default function Exercises() {
  const [exercises, setExercises] = useState(demoBodyPart);
  const item = useLocalSearchParams();
  const router = useRouter();
  // console.log("got item: ", item);

  {
    /* receive data from api */
  }

  // useEffect(() => {
  //   if (item) getExercises(item.name);
  // }, [item]);

  // const getExercises = async (bodyPart) => {
  //   let data = await fetchExercisesByBodyPart(bodyPart);
  //   console.log("Data with api: ", data);
  //   setExercises(data);
  // };

  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-rose-500 mx-4 absolute flex justify-center items-center rounded-full pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* exercises */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="font-semibold text-neutral-700"
        >
          {item.name} exercises
        </Text>
        <View className="mb-10">
          <ExerciseList data={exercises} />
        </View>
      </View>
    </ScrollView>
  );
}
