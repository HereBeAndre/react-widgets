import React, { useState, useEffect } from "react";
import googleapi from "../api/googleapi";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const { value: target } = language;
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await googleapi.post(
        "",
        {}, // Translate API 2nd argument is for body params
        {
          params: {
            q: text,
            target: target,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    doTranslation();
    console.log(translatedText);
  }, [target, text]);

  return (
    <div>
      <h3 className="ui header">{translatedText}</h3>
    </div>
  );
};

export default Convert;
