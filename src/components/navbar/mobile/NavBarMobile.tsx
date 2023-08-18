import { ReactNode } from 'react';
interface NavBarMobileProps {
  children: ReactNode;
}
export default function NavBarMobile({ children }: NavBarMobileProps) {
  return (
    <div className="lg:hidden flex justify-between bg-primary-secondary">
      {children}
      <div className="px-2 py-4 font-accent text-light text-step-1 font-medium">
        Spruce Street
      </div>
    </div>
  );
}
