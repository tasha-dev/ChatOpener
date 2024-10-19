// Codes by mahdi tasha
// Importing part 
import * as open from 'open';
import { createInterface } from 'readline';

// Defining interface of read line (prompt)
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Defining a function to open ChatGPT with given query 
export async function OpenChatGPT({query}) {
  // Defining variables
  const trimedQuery = query.trim()
  const encodedQuery = encodeURIComponent(trimedQuery);

  // Opening Default web browser
  await open.default(`https://chatgpt.com/?q=${encodedQuery}`);
}

// Defining a function to ask question with prompt
export function askQuestion() {
  // Starting questioning
  rl.question('Write Here : ', (message) => {
    // If message starts with space character or ot has 0 lenght in characters the repeat the questioning
    // Otherwie call `OpenChatGPT` and close prompt
    if (
      message.startsWith(" ") ||
      message.length === 0
    ) {
      console.log('Please insert correct message.');
      askQuestion();
    } else {
      OpenChatGPT({query: message})
        .then(() => console.log(`New chat is being created in ChatGPT`))
        .catch(() => console.error(`There was an error while creating new chat in ChatGPT`)) 
        .finally(() => rl.close())
    }
  })
}

