import { Headset, LogOut, Settings, VenetianMask } from 'lucide-react';
interface Props {
  isCollapsed: boolean;
}
export default function UserProfil({ isCollapsed }: Props) {
  return (
    <div className="p-4 border-t dark:border-gray-800 bottom-0 w-full relative">
      <button
        className={`flex items-center gap-3 w-full hover:bg-gray-200 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors cursor-pointer peer
              ${isCollapsed ? 'justify-center' : ''}`}
      >
        <div className="w-8 h-8 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
          BK
        </div>

        {!isCollapsed && (
          <div className="flex-1 text-left flex flex-col ">
            <span className="text-sm font-medium text-gray-500">User Name</span>
            <span className="text-xs text-gray-500">Free Plan</span>
          </div>
        )}
      </button>
      <UserDetail isCollapsed={isCollapsed} />
    </div>
  );
}

export function UserDetail({ isCollapsed }: Props) {
  return (
    <div
      className={`absolute shadow-md  shrink-0 whitespace-nowrap border-[0.5px] dark:border-0  px-2 rounded-lg bg-white invisible peer-focus:visible translate-y-2 peer-focus:translate-y-0 transition-all duration-300 opacity-0 peer-focus:opacity-100 dark:bg-gray-800 *:px-1.5 ${
        isCollapsed
          ? 'w-[17rem] m-3 left-full bottom-0 bg-red-600'
          : 'w-[95%] bottom-full left-1/2 -translate-x-1/2'
      }`}
    >
      <div className="text-center text-[15px] py-3.5 dark:text-gray-400 text-gray-400">
        <div className="w-16 h-16 mx-auto rounded-full bg-linear-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mb-3.5">
          BK
        </div>
        <h3>UserName</h3>
        <h4>kumar9416@gmail.com</h4>
      </div>
      <ul className="border-y-[0.5px] *:py-2 py-2 *:flex *:items-center *:gap-3.5 text-[15px] *:cursor-pointer dark:border-gray-700 dark:text-gray-300 text-gray-800 border-gray-300">
        <li>
          <Settings size={20} /> Setting
        </li>
        <li>
          <Headset size={20} /> Help Center
        </li>
        <li>
          <VenetianMask size={20} /> Personalization
        </li>
      </ul>
      <button className="text-red-500 py-3.5 flex items-center gap-3.5 cursor-pointer">
        <LogOut /> Logout
      </button>
    </div>
  );
}
