import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
interface NavBarMobileProps {
  children: ReactNode;
}
export default function NavBarMobile({ children }: NavBarMobileProps) {
  return (
    <div className="lg:hidden flex justify-between bg-primary-secondary">
      {children}
      <div className="px-2 py-4 font-accent text-light text-step-1 font-medium">
        <Link to="/">Spruce Street</Link>
      </div>
    </div>
  );
}
