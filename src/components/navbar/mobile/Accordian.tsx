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
      <div className="flex gap-space-s justify-between">
        <div className="text-step-2 font-accent">{header}</div>
        <div
          className="flex self-center mt-1.5"
          onClick={() => setExpand((expand) => !expand)}
        >
          <ChevronDownIcon
            className={`block h-4 w-4 fill-light-text dark:fill-dark-text ${
              expand ? 'rotate-180 transform' : ''
            }`}
          />
        </div>
      </div>
      <div className={`overflow-hidden ${expand ? '' : 'max-h-0'}`}>
        <ul className="mb-4">
          {body.map((item) => (
            <li key={item.id} className="font-body text-step-0">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
