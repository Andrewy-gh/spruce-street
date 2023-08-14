import { useState } from 'react';
interface Item {
  id: number;
  name: string;
}

interface MenuItemProps {
  header: string;
  body: Item[];
}

export default function MenuItem({ header, body }: MenuItemProps) {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="relative inline-block group">
      <div
        className="font-accent text-step-0 text-light px-8"
        onClick={toggleOpen}
        onMouseEnter={toggleOpen}
        onMouseLeave={toggleOpen}
      >
        {header}
      </div>
      <div
        className={`absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 ${
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
