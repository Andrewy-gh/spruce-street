import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface Item {
  id: number;
  name: string;
}

interface MenuItemProps {
  header: string;
  body: Item[];
}

export default function MenuItemDesktop({ header, body }: MenuItemProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="relative inline-block group">
      {/* Header */}
      <div
        className="font-accent text-step-0 text-light px-8"
        onClick={toggleOpen}
      >
        <div className="flex">
          {header}
          <div className="flex self-center ml-1.5 mt-1.5">
            <ChevronDownIcon
              className={`h-4 w-4 text-light ${
                open ? 'rotate-180 transform' : ''
              }`}
            />
          </div>
        </div>
      </div>
      {/* Body */}
      <div
        className={`absolute pt-2 bg-primary-secondary min-w-[2rem] z-10 ${
          open ? 'block' : 'hidden'
        }`}
      >
        <ul>
          {body.map((item) => (
            <li key={item.id} className="pt-2 px-8 pb-4">
              <a href="#" className="font-body text-light text-step--1">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
