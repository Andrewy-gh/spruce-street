import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export default function NavBarDesktop() {
  return (
    <div className="hidden lg:grid grid-cols-3 bg-dark-secondary py-4 px-space-l items-center justify-center">
      <div className="align-self-center justify-self-start font-accent text-light text-step-1 font-medium">
        Spruce Street
      </div>
      <div className="align-self-center justify-self-center flex">
        <div className="relative inline-block group">
          <div className="font-accent text-step-0 text-light px-8">Plants</div>
          <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
          </div>
        </div>
        <div className="relative inline-block group">
          <div className="font-accent text-step-0 text-light px-8">Tools</div>
          <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
          </div>
        </div>
        <div className="relative inline-block group">
          <div className="font-accent text-step-0 text-light px-8">Care</div>
          <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
            <div className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                Lorem
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="align-self-center justify-self-end flex gap-space-xs">
        {/* <span>Search</span>
        <span>User</span>
        <span>Cart</span> */}
        <MagnifyingGlassIcon className="text-light h-6 w-6 cursor-pointer" />
        <ShoppingBagIcon className="text-light h-6 w-6 cursor-pointer" />
        <UserCircleIcon className="text-light h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
