import { EllipsisVertical } from 'lucide-react';

export default function ItemList() {
  return (
    <div className="relative">
      <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300 peer">
        <EllipsisVertical size={20} />
      </button>

      <div className="absolute translate-y-2 peer-focus:translate-y-0 right-0 mt-2 w-[10rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl invisible opacity-0 peer-focus:visible peer-focus:opacity-100 transition-all duration-200 transform origin-top-left z-50 text-[15px]">
        <ul className="py-2 text-gray-700 dark:text-gray-200">
          <li className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <i className="ri-github-fill text-2xl"></i>
            Github
          </li>
          <li className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <i className="ri-discord-fill text-2xl"></i>
            Discord
          </li>
          <li className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-2">
            <i className="ri-stack-overflow-fill text-2xl"></i>
            Stackoverflow
          </li>
        </ul>
      </div>
    </div>
  );
}
