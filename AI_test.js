import OpenAI from "openai"
import "dotenv/config"


const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY
})
async function main() {
  const completion = await openai.chat.completions.create({
    model: "meta-llama/llama-3.1-8b-instruct:free",
    messages: [
      { role: "user", content: "Say this is a test" }
    ],
  })

  console.log(completion.choices[0].message)
}
main()