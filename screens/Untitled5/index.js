import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Text } from "react-native";
import { Slider } from "react-native-elements";

const Untitled5 = () => {
  const [sliderValue, setSliderValue] = useState(3);

  const handleSliderChange = value => {
    setSliderValue(value);
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <Text style={styles.question}>
          How satisfied are you with our service?
        </Text>
        <Slider style={styles.slider} thumbStyle={{
        height: 20,
        width: 20
      }} thumbTintColor="#0000FF" maximumValue={5} minimumValue={1} step={1} value={sliderValue} onValueChange={handleSliderChange}></Slider>
        <Text style={styles.answer}>{sliderValue}</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  slider: {
    width: 269,
    height: 51,
    alignSelf: "center"
  },
  question: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30
  },
  answer: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20
  }
});
export default Untitled5;