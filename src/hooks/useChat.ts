import { useState } from 'react';

export interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [botTyping, setBotTyping] = useState('');

  const generateBotResponse = async (msg: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return `Hello! Thanks for your message: "${msg}".\nBut This is dummy Message from Bharat Kumar.`;
  };

  const typeWriter = (fullText: string) => {
    setBotTyping('');
    let index = 0;

    const interval = setInterval(() => {
      setBotTyping(fullText.slice(0, index + 1));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setMessages((prev) => [...prev, { sender: 'bot', text: fullText }]);
        setBotTyping('');
      }
    }, 25);
  };

  const sendMessage = async (msg: string) => {
    setMessages((prev) => [...prev, { sender: 'user', text: msg }]);

    const botReply = await generateBotResponse(msg);

    typeWriter(botReply);
  };

  return {
    messages,
    botTyping,
    sendMessage,
  };
};
