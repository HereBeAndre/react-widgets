import React, { useState, useEffect } from "react";
import googleapi from "../api/googleapi";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");
  const [debounceText, setDebounceText] = useState(text);
  const { value: target } = language;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await googleapi.post(
        "",
        {}, // Google Translate API 2nd argument is for body params
        {
          params: {
            q: debounceText,
            target: target,
            // Add key
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };
    debounceText && doTranslation();
  }, [target, debounceText]);

  return (
    <div>
      <h3 className="ui header">{translatedText}</h3>
    </div>
  );
};

export default Convert;
