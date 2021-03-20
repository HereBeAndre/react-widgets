import axios from "react-axios";

export const wikipedia = axios.create({
  baseURL: "https://www.mediawiki.org/w/api.php",
});
