import ModelOption from '../../../data/modelOption.json';
import { useState } from 'react';
import { ChevronDown, Check, FlaskConical, Zap, Braces } from 'lucide-react';

const icons = { FlaskConical, Zap, Braces };

type IconName = keyof typeof icons;

interface ModelOption {
  id: string;
  name: string;
  description: string;
  icon: IconName;
}

const models = ModelOption as ModelOption[];

export default function Dropdown() {
  const [selectedModel, setSelectedModel] = useState<ModelOption>(models[0]);

  return (
    <>
      <div className="relative">
        <button className="flex cursor-pointer items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-all text-sm font-medium text-gray-700 dark:text-gray-200 peer group">
          <span className="flex items-center gap-2">
            {selectedModel.name}
            <span className="opacity-50 text-xs font-normal hidden sm:inline-block ">
              ({selectedModel.id})
            </span>
          </span>
          <ChevronDown className="size-5 group-focus:rotate-180 transition-all duration-300" />
        </button>

        <div className="absolute  left-0 top-full mt-2 min-w-[15rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 invisible opacity-0 translate-y-2 peer-focus:visible peer-focus:translate-y-0 peer-focus:opacity-100 transition-all duration-300 whitespace-nowrap">
          <ul>
            {models.map((model) => {
              const IconComponent = icons[model.icon];
              return (
                <li
                  key={model.id}
                  onClick={() => {
                    setSelectedModel(model);
                  }}
                  className={`px-4 py-3 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3
                    ${
                      selectedModel.id === model.id
                        ? 'bg-blue-50 dark:bg-blue-900/20'
                        : ''
                    }
                  `}
                >
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <IconComponent />
                  </div>

                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        selectedModel.id === model.id
                          ? 'text-black dark:text-black'
                          : 'text-gray-900 dark:text-gray-100'
                      }`}
                    >
                      {model.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {model.description}
                    </p>
                  </div>

                  {selectedModel.id === model.id && <Check />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
