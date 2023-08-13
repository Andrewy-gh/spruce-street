import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

export default function MenuMobile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="text-[40px] cursor-pointer p-2">
        <Bars3Icon
          className="block h-6 w-6 fill-light-text dark:fill-dark-text"
          aria-hidden="true"
          onClick={() => setOpen(true)}
        />
      </div>
      {/* Main Menu */}
      <div
        className={`fixed bg-[#002626]/90 w-0 h-[100vh] text-white flex flex-col  items-center gap-[15vw] text-[40px] tracking-[1px] overflow-hidden origin-left duration-500 ${
          open ? 'w-[100vw]' : ''
        }`}
        // className={`fixed bg-[#002626]/90 w-0 h-[100vh] text-white flex justify-center items-center text-[40px] tracking-[1px] overflow-hidden orgin-left duration-500 ${
        //   open ? 'w-[100vw]' : ''
        // }`}
      >
        {/* Close Button */}
        <div
          // className="absolute top-[40px] left-[100px] text-[40px] cursor-pointer"
          className="self-start p-2"
          onClick={() => setOpen(false)}
        >
          <XMarkIcon
            className="block h-6 w-6 fill-light-text dark:fill-dark-text"
            aria-hidden="true"
          />
        </div>
        <ul>
          {/* hover:textShadow duration-500 hover:translate-y-[-5px] */}
          <li className="hover:translate-y-[-5px]">
            <a href="#">Home</a>
          </li>
          <li className="hover:translate-y-[-5px]">
            <a href="#">Porfolio</a>
          </li>
          <li className="hover:translate-y-[-5px]">
            <a href="#">Services</a>
          </li>
          <li className="hover:translate-y-[-5px]">
            <a href="#">Contact</a>
          </li>
          <li className="hover:translate-y-[-5px]">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
    </>
  );
}
