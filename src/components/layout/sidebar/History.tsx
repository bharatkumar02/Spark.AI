import { Ellipsis } from "lucide-react";

interface Props {
  isCollapsed: boolean;
}

const historyArray = [
  'React Components',
  'Tailwind Grid',
  'Debugging Tips',
  'What is the concept of Geography?',
];

export default function History({ isCollapsed }: Props) {
  return (
    <div
      className={`flex-1 overflow-y-auto px-3 pt-7 scrollbar-hide ${isCollapsed && 'hidden'}`}
    >
      <div className="mt-2 space-y-6">
        <div>
          <h3 className="px-2 text-xs font-semibold dark:text-gray-500 text-gray-600 uppercase mb-2 tracking-widest">
            Recent
          </h3>
          <ul>
            {historyArray.map((item, i) => (
              <li key={i}>
                <div className="flex items-center gap-10 px-3 py-1 w-full text-sm text-gray-700 dark:text-gray-300 rounded-lg dark:hover:bg-gray-800 hover:bg-gray-100 transition-colors text-left truncate justify-between group cursor-pointer">
                  <span className="truncate">{item}</span>

                  <Ellipsis size={30} className="opacity-60 shrink-0 lg:invisible group-hover:visible transition-all duration-75 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-full p-1.5"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
