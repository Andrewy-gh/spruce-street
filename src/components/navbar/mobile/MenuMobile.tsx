import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Accordian from './Accordian';

// <ChevronDownIcon className={open ? 'rotate-180 transform' : ''} />;

const bodyItems = [
  { id: 1, name: 'Lorem' },
  { id: 2, name: 'Lorem' },
  { id: 3, name: 'Lorem' },
];

export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-[40px] cursor-pointer p-2">
        <Bars3Icon
          className="block h-7 w-7 text-light"
          aria-hidden="true"
          onClick={() => setOpen(true)}
        />
      </div>
      {/* Main Menu */}
      <div
        className={`fixed bg-[#002626]/90 w-0 h-[100vh] z-10 text-white flex flex-col items-center gap-[15vw] text-step-0 tracking-[1px] overflow-hidden origin-left duration-500 ${
          open ? 'w-[100vw]' : ''
        }`}
      >
        {/* Close Button */}
        <div className="self-start p-2" onClick={() => setOpen(false)}>
          <XMarkIcon className="block h-7 w-7 text-light " aria-hidden="true" />
        </div>
        <ul>
          <li className="mb-1.5">
            <Accordian header={'Plants'} body={bodyItems} />
          </li>
          <li className="mb-1.5">
            <Accordian header={'Tools'} body={bodyItems} />
          </li>
          <li className="mb-1.5">
            <Accordian header={'Care'} body={bodyItems} />
          </li>
        </ul>
      </div>
    </>
  );
}
