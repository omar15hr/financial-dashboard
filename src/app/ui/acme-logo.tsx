import { Globe } from 'lucide-react';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Globe className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Financial Dashboard</p>
    </div>
  );
}
