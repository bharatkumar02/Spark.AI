import ChatInput from './ChatInput';
import { useChat } from '../../hooks/useChat';

const ChatOutput = () => {
  const { messages, botTyping, sendMessage } = useChat();

  return (
    <div
      className={`w-full max-w-3xl mx-auto relative transition-all duration-300 ${
        messages.length > 0 && 'flex flex-col justify-between h-full'
      }`}
    >
      <div
        className={`space-y-4 mb-4 transition-all duration-300 ${
          messages.length > 0 && 'h-full overflow-y-scroll'
        }`}
      >
        {messages.length === 0 && (
          <div className="max-w-4xl mx-auto text-center mt-10">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Ask Anything you want to know!
            </h1>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl ${
              m.sender === 'user'
                ? 'dark:bg-gray-950 bg-gray-300 text-black dark:text-gray-200 max-w-[30rem] w-fit ml-auto text-left'
                : 'dark:bg-gray-800  dark:text-gray-300 text-black w-full bg-gray-100 shadow'
            }`}
          >
            {m.text}
          </div>
        ))}

        {botTyping && (
          <div className="p-3 rounded-xl dark:bg-gray-800 dark:text-gray-300 text-black whitespace-pre-line w-full">
            {botTyping}
            <span className="animate-pulse">|</span>
          </div>
        )}
      </div>

      <div className={`w-full ${messages.length > 0 && 'transition-all duration-300'}`}>
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
};

export default ChatOutput;
