import { Layout } from '@/widgets/Layout/ui/Layout';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { SignUpForm } from '@/widgets/SignUpForm';

export function SignupPage() {
  return (
    <Layout>
      <div className="px-4 md:px-8 lg:px-40 w-full h-[900px]">
        <Navbar />
        <div className="flex w-full h-full items-center justify-center">
          <SignUpForm />
        </div>
      </div>
    </Layout>
  );
}
