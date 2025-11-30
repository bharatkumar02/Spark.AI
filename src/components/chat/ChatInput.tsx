import { Plus, Send, Paperclip, Brain, ImageUp } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const ChatInput = ({ onSend }: { onSend: (msg: string) => void }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto pt-4 pb-6 px-4">
      <div
        className={`relative flex items-end w-full p-3 bg-gray-100 dark:bg-gray-800 rounded-3xl ${
          message.length > 0 && 'absolute -left-1/2 translate-x-1/2'
        }`}
      >
        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Anything!"
            rows={3}
            className="flex-1 bg-transparent w-full border-0 focus:ring-0 outline-none text-gray-800 dark:text-gray-100 text-base p-3 resize-none overflow-y-auto scrollbar-hide placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-between w-full">
              <div className="relative">
                <button
                  className="p-2 text-gray-500 cursor-pointer dark:text-gray-400 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors peer"
                  title="Add Attachment"
                >
                  <Plus size={20} />
                </button>
                <div className="absolute text-gray-500 dark:text-gray-400 shadow-md dark:bg-gray-700 rounded-lg mt-3.5 py-2 invisible opacity-0 translate-y-2 peer-focus:visible peer-focus:opacity-100 peer-focus:translate-y-0 transition-all duration-300">
                  <ul className="*:py-3 text-[15px] *:flex *:items-center whitespace-nowrap *:gap-2.5 px-3.5">
                    <li>
                      <Paperclip size={20} /> Add Photos & Files
                    </li>
                    <li>
                      <Brain size={20} /> Deep Analysis
                    </li>
                    <li>
                      <ImageUp size={20} /> Create Images
                    </li>
                  </ul>
                </div>
              </div>
              <div />
            </div>

            <button
              type="submit"
              onClick={handleSend}
              disabled={!message.trim()}
              className="p-2 rounded-full dark:text-gray-300 text-gray-600 "
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
