function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.textContent = input.value;
  chatBox.appendChild(userMsg);

  // Simple AI response (mock)
  const aiMsg = document.createElement("div");
  aiMsg.className = "msg ai";
  aiMsg.textContent = getAIResponse(input.value);
  chatBox.appendChild(aiMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getAIResponse(message) {
  message = message.toLowerCase();
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello there! 👋 I'm here to help you learn about AI.";
  } else if (message.includes("vision")) {
    return "AI vision lets machines see, detect, and classify images.";
  } else if (message.includes("nlp") || message.includes("language")) {
    return "Natural Language Processing is how AI understands human speech.";
  } else {
    return "Interesting! AI can help with that too. 😄";
  }
}
