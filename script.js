
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
const userInputValue = userInput.value.trim();
if (userInputValue!== '') {
// Process user input and generate response
const response = generateResponse(userInputValue);
addMessageToChatLog(userInputValue, response);
userInput.value = '';
}
});

function generateResponse(userInput) {
// TO DO: Implement AI response generation logic here
return 'Hello, World!';
}


sendButton.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();
  if (userInputValue!== '') {
    const response = generateResponse