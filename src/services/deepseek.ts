import OpenAI from 'openai';
import 'dotenv/config';

const apiKey = process.env.VITE_DEEPSEEK_API_KEY;

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: `${apiKey}`,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: 'You generate comma-separated keyword lists only',
      },
      {
        role: 'user',
        content: 'Generate 10 keywords for: Keynesian economics',
      },
    ],
    model: 'deepseek-chat',
  });

  console.log(completion.choices[0].message.content);
}

main();
