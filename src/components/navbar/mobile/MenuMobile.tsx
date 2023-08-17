import { useState, useRef, useEffect } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Accordian from './Accordian';

const bodyItems = [
  { id: 1, name: 'Lorem' },
  { id: 2, name: 'Lorem' },
  { id: 3, name: 'Lorem' },
];

export default function MenuMobile({ navigation }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Function to handle click events outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    // Add the event listener
    window.addEventListener('click', handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuIconClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
  };

  return (
    <>
      <div className="cursor-pointer px-2 py-4">
        <Bars3Icon
          className="block h-9 w-9 text-light"
          aria-hidden="true"
          onClick={handleMenuIconClick}
        />
      </div>
      {/* Main Menu */}
      <div
        ref={menuRef}
        className={`fixed bg-[#002626]/90 w-0 h-[100vh] text-white flex flex-col items-center gap-[15vw] text-step-0 overflow-hidden origin-left duration-500 ${
          open ? 'w-[70vw]' : ''
        }`}
      >
        {/* Close Button */}
        <div className="self-start px-2 py-4" onClick={() => setOpen(false)}>
          <XMarkIcon
            className="block h-9 w-9 text-light cursor-pointer"
            aria-hidden="true"
          />
        </div>
        <ul className="w-full px-4">
          {navigation.map(({ id, section, links }) => (
            <li key={id} className="mb-space-s">
              <Accordian header={section} body={links} />
            </li>
          ))}
          {/* <li className="mb-space-s">
            <Accordian header={'Plants'} body={bodyItems} />
          </li>
          <li className="mb-space-s">
            <Accordian header={'Tools'} body={bodyItems} />
          </li>
          <li className="mb-space-s">
            <Accordian header={'Care'} body={bodyItems} />
          </li> */}
        </ul>
      </div>
    </>
  );
}
