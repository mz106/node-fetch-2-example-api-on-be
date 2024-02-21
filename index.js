// Version 18+ of Node includes fetch (i.e. it's built in)

// Versions prior to 18 (17 and below) does not.

// If you're using Node 17 and below and need to fetch data from an api

// Install node-fetch package and require as below

// for common js: npm install node-fetch@2

// for ESM (like the JS in React)

// npm install node-fetch

const fetch = require("node-fetch");

// https://api.thecatapi.com/v1/images/search?limit=10

const getCats = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  const data = await response.json();
  console.log(data);
};

getCats();
