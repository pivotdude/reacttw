import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';
import { SettingsItem } from './SettingsItem';
import { SettingsType } from '../types';

export function SettingsMenu() {
  const type = useSettingsStore((store) => store.type);
  const setType = useSettingsStore((store) => store.setType);

  const settingItems = [
    { name: 'Account', type: 'account' },
    { name: 'Appearance', type: 'appearance' },
    { name: 'Privacy', type: 'privacy' },
  ] as { name: string; type: SettingsType }[];

  return (
    <>
      {settingItems.map((item) => (
        <SettingsItem
          key={item.type}
          name={item.name}
          isActive={type === item.type}
          onClick={() => setType(item.type)}
        />
      ))}
    </>
  );
}
