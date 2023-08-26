import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';

interface NavBarMobileProps {
  children: React.ReactNode;
}
export default function NavBarMobile({ children }: NavBarMobileProps) {
  return (
    <div className="lg:hidden flex justify-between bg-primary-secondary">
      {children}
      <Link to="/">
        <div className="flex items-center gap-1 px-2 py-4 font-accent text-light text-step-1 font-medium">
          <div>Spruce Street</div>
          <div className="mt-0.5">
            <img src={logo} alt="spruce street logo" />
          </div>
        </div>
      </Link>
    </div>
  );
}
