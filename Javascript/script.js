let searcher = document.getElementById("magnifer_icon");
import { fetcher } from "./functions.js";
searcher.addEventListener("click", () => {
  fetcher();
});

let search_input = document.getElementById("search_input");
search_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    fetcher();
  }
});