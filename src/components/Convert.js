import React, { useState, useEffect } from "react";
import googleapi from "../api/googleapi";

const Convert = ({ language, text }) => {
  useEffect(() => {
    const search = async () => {
      const response = await googleapi.post("", {
        params: {
          q: text,
          target: language,
          //   apiKey
        },
      });
    };
  }, [language, text]);

  return <div></div>;
};

export default Convert;
