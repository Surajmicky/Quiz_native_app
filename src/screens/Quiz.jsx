import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { ScoreContext } from "../context/ScoreContext";
const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [count, setCount] = useState(0);
  const [currentOptions, setCurrentOptions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState("");

  const { score, setScore } = useContext(ScoreContext);

  useEffect(() => {
    (async () => {
      let data = await (
        await fetch(
          "https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple&encode=url3986"
        )
      ).json();
      setTimeout(() => {
        setQuestions(data.results);
        setCurrentQuestion(data.results[count].question);
        setCurrentOptions(getoptions(data.results[count]));
      }, 1000);
    })();
  }, []);
  function getoptions(cq) {
    let options = [cq.correct_answer, ...cq.incorrect_answers];
    shuffleArray(options);
    setAnswer(cq.correct_answer);

    return options;
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  const checkAnswer = (option) => {
    setSelected(option);
  };
  const handleNext = () => {
    if (selected.length > 0) {
      setCount((count) => count + 1);
      setCurrentQuestion(questions[count].question);
      setCurrentOptions(getoptions(questions[count]));

      if (selected == answer) {
        setScore((score) => score + 1);
      }
    }
    setSelected("");
  };
  const handleSkip = () => {
    setCount((count) => count + 1);
    setCurrentQuestion(questions[count].question);
    setCurrentOptions(getoptions(questions[count]));
  };

  return (
    <View style={styles.container}>
      {questions ? (
        <View style={styles.box}>
          <Text style={styles.score}>score:{score}</Text>
          <Text style={styles.question}>
            Q.{count + 1} {decodeURIComponent(currentQuestion)}
          </Text>
          <View style={styles.answers}>
            <TouchableOpacity
              style={styles.options}
              onPress={(event) => checkAnswer(currentOptions[0], event)}>
              <Text style={styles.optionText}>
                {" "}
                {decodeURIComponent(currentOptions[0])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => checkAnswer(currentOptions[1])}>
              <Text style={styles.optionText}>
                {" "}
                {decodeURIComponent(currentOptions[1])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => checkAnswer(currentOptions[2])}>
              <Text style={styles.optionText}>
                {decodeURIComponent(currentOptions[2])}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => checkAnswer(currentOptions[3])}>
              <Text style={styles.optionText}>
                {decodeURIComponent(currentOptions[3])}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSkip}>
              <Text style={styles.buttontext}>SKIP</Text>
            </TouchableOpacity>
            {count !== questions.length && (
              <TouchableOpacity style={styles.button} onPress={handleNext}>
                <Text style={styles.buttontext}>NEXT</Text>
              </TouchableOpacity>
            )}
            {count == questions.length && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Result")}>
                <Text style={styles.buttontext}>END</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ) : (
        <View>
          <Image source={require("../../assets/loading.gif")} />
        </View>
      )}
    </View>
  );
};

export default Quiz;

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
    fontSize: 20,
    left: 70,
    height: 40,
    backgroundColor: "teal",
    padding: 5,
    borderRadius: 5,
    top: -10,
  },
  box: {
    height: "100%",
    position: "absolute",
    top: 20,
  },
  question: {
    fontSize: 20,
    color: "#A6E1FA",
    marginBottom: 30,
    position: "absolute",
    width: 300,
    top: 30,
    left: -140,
  },
  answers: {
    position: "absolute",
    top: 200,
    left: -140,
  },
  options: {
    justifyContent: "center",
    backgroundColor: "#A6E1FA",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 12,
    paddingTop: 10,
    paddingBottom: 10,
    width: 300,
  },
  optionText: {
    fontSize: 16,
    color: "#0E6BA8",
  },
  button: {
    width: 150,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#A6E1FA",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 32,
    left: -148,
  },
  buttontext: {
    color: "#0E6BA8",

    display: "flex",
    textAlign: "center",
    alignItems: "center",
  },
});
