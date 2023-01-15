import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
const Result = ({ navigation }) => {
  const { score, setScore } = useContext(ScoreContext);
  const handleReplay = () => {
    setScore(0);
    navigation.navigate("Quiz");
  };
  const handleHome = () => {
    setScore(0);
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.score}>Total Score : {score}</Text>
      <TouchableOpacity style={styles.home} onPress={handleHome}>
        <Text style={styles.hometext}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.replay} onPress={handleReplay}>
        <Text style={styles.replaytext}>Replay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    top: 25,
    height: "100%",
    padding: 16,
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#0E6BA8",
  },
  score: {
    position: "absolute",
    color: "#A6E1FA",
    fontSize: 40,
    backgroundColor: "teal",
    padding: 15,
    borderRadius: 10,
    top: 50,
  },
  hometext: {
    color: "#0E6BA8",

    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
  },
  home: {
    width: 300,
    height: 80,
    justifyContent: "center",
    backgroundColor: "#A6E1FA",
    borderRadius: 10,
    position: "absolute",
    top: 300,
  },
  replay: {
    width: 300,
    height: 80,
    justifyContent: "center",
    backgroundColor: "#A6E1FA",
    borderRadius: 10,
    position: "absolute",
    top: 500,
  },
  replaytext: {
    color: "#0E6BA8",

    fontSize: 30,
    textAlign: "center",
    alignItems: "center",
  },
});
