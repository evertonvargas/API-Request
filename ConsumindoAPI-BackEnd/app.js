const cors = require("cors");
const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", async (req, res) => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  try {
    // {data} -> pego só dados da requisição
    const {data} = await axios(URL); 
    console.log(data);
    // return res.json(data);
  
  } catch (error) {
      console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

