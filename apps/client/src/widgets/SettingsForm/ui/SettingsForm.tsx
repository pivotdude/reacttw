import { useSettingsStore } from '@/pages/settings/store/useSettingsStore';
import { AccountForm } from './AccountForm';

export function SettingsForm() {
  const type = useSettingsStore((store) => store.type);
  return (
    <>
      {type === 'account' && <AccountForm />}
      {type === 'appearance' && <p>apperancy</p>}
      {type === 'privacy' && <p>privacy</p>}
    </>
  );
}
