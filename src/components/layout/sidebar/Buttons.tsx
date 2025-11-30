import { SquarePen, FileSearchCorner, Settings, Headset } from 'lucide-react';
interface Props {
  isCollapsed: boolean;
}

const buttonArray = [
  {
    buttonName: 'New Chat',
    icon: SquarePen,
  },
  {
    buttonName: 'Search Chats',
    icon: FileSearchCorner,
  },
  {
    buttonName: 'Setting',
    icon: Settings,
  },
  {
    buttonName: 'Help Center',
    icon: Headset,
  },
];

export default function Buttons({ isCollapsed }: Props) {
  return (
    <div className="*:w-full flex flex-col p-3.5 ">
      {buttonArray.map((item, index) => (
        <button
          key={index}
          className={`flex items-center py-2 rounded-lg dark:text-gray-300 gap-3 px-3  text-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 transition-all group
              ${isCollapsed ? 'justify-center py-3.5' : ''}`}
        >
          {/* Plus Icon */}
          <item.icon size={20} />

          {!isCollapsed && <span className="text-[15px]">{item.buttonName}</span>}
        </button>
      ))}
    </div>
  );
}
