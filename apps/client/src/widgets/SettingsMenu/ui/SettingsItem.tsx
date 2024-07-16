import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface SettingItemProps {
  name: string;
  isActive: boolean;
  onClick: () => void;
}

export function SettingsItem({ name, isActive, onClick }: SettingItemProps) {
  return (
    <div
      className={twMerge(
        clsx('w-full text-lg transition-colors duration-200', {
          'font-bold': isActive,
          'text-gray-600 hover:text-gray-900': !isActive,
        }),
      )}
    >
      <a onClick={onClick} className="cursor-pointer">
        {name}
      </a>
    </div>
  );
}
