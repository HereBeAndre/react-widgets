import React, { useState, useEffect } from "react";
import googleapi from "../api/googleapi";

const Convert = ({ language, text }) => {
  const { value: target } = language;
  useEffect(() => {
    googleapi.post(
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
  }, [target, text]);

  return <div></div>;
};

export default Convert;
