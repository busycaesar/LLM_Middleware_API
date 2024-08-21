const router = require("express").Router();
const response = require("../response");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

if (!process.env.API_KEY) {
  console.log("API Key not provided.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.get("/", async (req, res) => {
  // Get the prompt from the request body.
  const { prompt } = req.body;

  // Make sure all the required data is valid.
  if (!prompt)
    return res
      .status(401)
      .json(response(false, "Please provide a prompt in the request body."));

  try {
    // Make a request to get the answer of the prompt.
    const llmResponse = await model.generateContent(prompt);
    const { text } = await llmResponse.response;

    // Send the response with the answer.
    res
      .status(200)
      .json(response(true, "Response sent.", { response: text() }));
  } catch (error) {
    res
      .status(500)
      .json(
        response(false, "Error while fetching the response.", { error: error })
      );
  }
});

module.exports = router;
