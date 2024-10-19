// Codes by mahdi tasha
// Importing part 
import * as utills from './utill/index.js';
import { createInterface } from 'readline';

// Getting arguments
const args = process.argv;
const stringArg = args.slice(2)[0];

// Definig interface of readline package
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Checking if user has passed arguments to the command 
// If they are then open chat gpt with given argument 
// Otherwise ask them question
if (stringArg) {
  utills.OpenChatGPT({query: stringArg})
    .then(() => console.log(`New chat is being created in ChatGPT`))
    .catch(() => console.error(`There was an error while creating new chat in ChatGPT`)) 
    .finally(() => rl.close())
} else {
  utills.askQuestion();
} 
