import { TypographyH2 } from '@/shared/ui/Typography';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { SettingsForm } from '@/widgets/SettingsForm';
import { SettingsMenu } from '@/widgets/SettingsMenu/ui/SettingsMenu';

export function SettingsPage() {
  return (
    <div className="px-4 md:px-8 lg:px-10">
      <Navbar />
      <TypographyH2>Settings</TypographyH2>
      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-7 h-full py-10 gap-x-10 gap-y-4">
        <div className="md:col-span-1 xl:col-span-1">
          <div className="w-full space-y-4">
            <SettingsMenu />
          </div>
        </div>
        <div className="md:col-span-3 xl:col-span-6">
          <SettingsForm />
        </div>
      </div>
    </div>
  );
}
