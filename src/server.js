const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.SECRET_KEY
  });

const openai = new OpenAIApi(configuration);

// Set up the server
const app = express();
app.use(bodyParser.json());
app.use(cors())

app.get("/chat",async(req,res)=>{
    res.send("shikher")
})

// Set up the ChatGPT endpoint
app.post("/message", async (req, res) => {
  // Get the prompt from the request
  const { prompt } = req.body;

  // Generate a response with ChatGPT
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });
  res.send(completion.data.choices[0].text);
});

// Start the server
const port = 3002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});