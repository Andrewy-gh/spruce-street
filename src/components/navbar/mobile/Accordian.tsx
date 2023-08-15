import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface Item {
  id: number;
  name: string;
}

interface AccordionProps {
  header: string;
  body: Item[];
}

export default function Accordion({ header, body }: AccordionProps) {
  const [expand, setExpand] = useState(false);

  return (
    <>
      <div
        className="w-[100%] flex gap-space-s justify-between"
        onClick={() => setExpand((expand) => !expand)}
      >
        <div className="text-step-2 font-accent">{header}</div>
        <div className="flex self-center mt-1.5">
          <ChevronDownIcon
            className={`block h-4 w-4 fill-light-text primary:fill-primary-text ${
              expand ? 'rotate-180 transform' : ''
            }`}
          />
        </div>
      </div>
      <div className={`overflow-hidden ${expand ? '' : 'max-h-0'}`}>
        <ul>
          {body.map((item) => (
            <li key={item.id} className="font-body text-step-0 m-space-s">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
