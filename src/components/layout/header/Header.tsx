import Dropdown from './Dropdown';
import ItemList from './ItemList';
import ToggleMode from './ToggleMode';

const Header = () => {
  return (
    <header className="w-full h-16 flex justify-between items-center px-4 bg-white dark:bg-gray-900 transition-all">
      <Dropdown />
      <div className="flex items-center gap-2">
        <ToggleMode />
        <ItemList />
      </div>
    </header>
  );
};

export default Header;
