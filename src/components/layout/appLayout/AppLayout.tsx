import { useState } from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { TextAlignStart } from 'lucide-react';
import ChatOutput from '../../chat/ChatOut';

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 overflow-hidden relative">
      <Sidebar
        isMobileOpen={isSidebarOpen}
        setIsMobileOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <div className="flex-1 flex flex-col min-w-0 transition-all duration-300 ease-in-out">
        <div className="flex items-center">
          <button
            className="md:hidden p-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsSidebarOpen(true)}
          >
            <TextAlignStart />
          </button>

          <div className="flex-1">
            <Header />
          </div>
        </div>

        <main className="flex-1 overflow-y-auto p-4 bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
          <ChatOutput />
        </main>

        <div className="text-center mb-3 px-2">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Spark.AI can make mistakes. Consider checking important information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
