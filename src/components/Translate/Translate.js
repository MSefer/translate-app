import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Translate.scss";
import { translate } from "../../api/index";
import { setText, setTranslatedText } from "../../redux/controlsSlice";

function Translate() {
  const dispatch = useDispatch();
  const textValue = useSelector((state) => state.controls.text);
  const translatedText = useSelector((state) => state.controls.translatedText);

  useEffect(() => {
    const handler = setTimeout(async () => {

      if (textValue) {git remote add origin https://github.com/user/repo.git
        const result = await translate(textValue);
        dispatch(setTranslatedText(result?.translatedText));
      } else {
        dispatch(setTranslatedText(""));
      }
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [dispatch, textValue]);

  const handleTextValue = (value) => {
    dispatch(setText(value));
  };

  return (
    <div className="translate-container">
      <div className="translate-header">
        <div className="language">İngilizce</div>
        <div className="language">Türkçe</div>
      </div>
      <div className="translate">
        <textarea cols="30" rows="10" value={textValue} onChange={(e) => handleTextValue(e.target.value)} />
        <textarea cols="30" rows="10" value={translatedText} placeholder="Çeviri" readOnly={true} />
      </div>
    </div>
  );
}

export default Translate;