// apiScript.js
// const fetch = require("node-fetch");

const API_URL = "https://icanhazdadjoke.com/";

const htmlLocal = document.getElementById("jokeContainer");



const fetchJoke = async () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

 const result = await fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      htmlLocal.innerText = data.joke;
    });
};



//fetchJoke();

window.onload = () => fetchJoke();
