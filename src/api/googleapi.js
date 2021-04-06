import axios from "axios";

export default axios.create({
  baseURL: "https://translation.googleapis.com/language/translate/v2",
});
