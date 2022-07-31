import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import History from "./components/History/History";
import Controls from "./components/Controls/Controls";
import Translate from "./components/Translate/Translate";
import { setText, setTranslatedStatus } from "./redux/controlsSlice";

function App() {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);
  const text = useSelector((state) => state.controls.text);
  const translatedText = useSelector((state) => state.controls.translatedText);

  const addToHistory = () => {
    let histories = JSON.parse(localStorage.getItem("history")) || [];

    histories.push({
      text,
      translatedText,
    });

    localStorage.setItem("history", JSON.stringify(histories));
    setHistory(histories);
  };

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
      let recognition = new SpeechRecognition();
      const speechRecognitionList = new SpeechGrammarList();
      let finalTranscript = "";

      recognition.grammars = speechRecognitionList;
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = async (event) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          finalTranscript += event.results[i][0].transcript;
        }

        dispatch(setText(finalTranscript));
        dispatch(setTranslatedStatus(true));
      };

      document.querySelector("#start").onclick = () => {
        recognition.start();
      };

      recognition.onspeechend = () => {
        recognition.stop();
      }

    } else {
      setError("Speech Recognition Not Available");
    }
  }, [dispatch]);

  useEffect(() => {
    if (text && translatedText) {
      addToHistory();
    }
    // eslint-disable-next-line
  }, [translatedText]);

  return (
    <div className="App">
      <h2>Translate App</h2>
      <Translate />
      <Controls error={error} />
      <History history={history} />
    </div>
  );
}

export default App;
