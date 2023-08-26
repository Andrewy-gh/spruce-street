import { Link } from 'react-router-dom';
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

import logo from '../../../assets/logo.svg';

interface NavBarDesktopProps {
  children: React.ReactNode;
}
export default function NavBarDesktop({ children }: NavBarDesktopProps) {
  return (
    <div className="hidden lg:flex bg-primary-secondary py-4 px-space-l items-center justify-between">
      <Link to="/">
        <div className="flex items-center gap-1 align-self-center justify-self-start font-accent text-light text-step-1 font-medium">
          <div className="mt-0.5">
            <img src={logo} alt="spruce street logo" />
          </div>
          <div>Spruce Street</div>
        </div>
      </Link>
      <div className="align-self-center justify-self-center flex">
        {children}
      </div>
      <div className="align-self-center justify-self-end flex gap-space-xs">
        <MagnifyingGlassIcon className="text-light h-6 w-6 cursor-pointer" />
        <ShoppingBagIcon className="text-light h-6 w-6 cursor-pointer" />
        <UserCircleIcon className="text-light h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
