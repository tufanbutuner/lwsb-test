import axios from "axios";

const url = "https://localhost:8000/posts";

export const fetchPosts = () => {
  axios.get(url);
};
