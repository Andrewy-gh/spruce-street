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
      <div className="flex gap-4 justify-between">
        <div>{header}</div>
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
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          expand ? '' : 'max-h-0'
        }`}
      >
        <div className="mb-4">
          {body.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}
