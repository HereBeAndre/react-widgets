import axios from "react-axios";

export default axios.create({
  baseURL: "https://www.mediawiki.org/w/api.php",
});
