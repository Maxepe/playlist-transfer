import express from "express";
import { config } from "dotenv";

config({ path: __dirname+'/.env' });
const app = express();

const PORT = process.env.PORT;

app.get("/", (request, response) => {
  response.status(200).send("Hello World");
}); 

app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
})