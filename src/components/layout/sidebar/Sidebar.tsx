import { PanelLeft, PanelRight } from 'lucide-react';
import UserProfile from './UserProfile';
import History from './History';
import Buttons from './Buttons';

type SidebarProps = {
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

const Sidebar = ({
  isMobileOpen,
  setIsMobileOpen,
  isCollapsed,
  toggleCollapse,
}: SidebarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-white border-r border-gray-300 dark:border-gray-800 dark:bg-gray-900 text-gray-300 transition-all duration-300 ease-in-out w-2/3 flex flex-col justify-between pt-3.5
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:inset-auto
          ${isCollapsed ? 'md:w-20' : 'md:w-72'} 
        `}
      >
        <div className="flex flex-col h-full relative">
          <div
            className={`flex items-center p-3 ${
              isCollapsed ? 'flex-col gap-2.5' : 'justify-between'
            }`}
          >
            <div className='flex items-center gap-2.5'>
              <div className="size-10 mx-auto rounded-full bg-linear-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-lg">
                AI
              </div>
              {!isCollapsed && (
                <span className="font-bold text-xl dark:text-white text-gray-700 tracking-tight">
                  Spark.AI
                </span>
              )}
            </div>

            <button
              onClick={toggleCollapse}
              className="hidden md:flex p-2 rounded-lg dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white text-gray-700 transition-colors cursor-pointer"
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? <PanelRight size={20} /> : <PanelLeft size={20} />}
            </button>
          </div>

          <Buttons isCollapsed={isCollapsed} />

          <History isCollapsed={isCollapsed} />
        </div>
        <UserProfile isCollapsed={isCollapsed} />
      </aside>
    </>
  );
};

export default Sidebar;
