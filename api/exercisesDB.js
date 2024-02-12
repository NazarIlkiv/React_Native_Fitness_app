import axios from "axios";
import { rapidApiKey } from "../constants/Images";

const baseUrl = "https://exercisedb.p.rapidapi.com";

const apiCall = async (url, params) => {
  if (rapidApiKey === "" || rapidApiKey === undefined) {
    return alert(
      "Please Enter Your API Key - you can receive key in Rapid API/ExercisesDB"
    );
  }

  try {
    const options = {
      method: "GET",
      url,
      params,
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log("error".err.message);
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
  return data;
};
