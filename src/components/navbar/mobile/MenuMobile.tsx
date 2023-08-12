import { Disclosure, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';

export default function MenuMobile() {
  return (
    <Disclosure as="div">
      {({ open }) => (
        <div>
          <Disclosure.Button className="px-2">
            <span className="sr-only">Open main menu</span>
            {open ? (
              <XMarkIcon
                className="block h-6 w-6 fill-light-text dark:fill-dark-text"
                aria-hidden="true"
              />
            ) : (
              <Bars3Icon
                className="block h-6 w-6 fill-light-text dark:fill-dark-text"
                aria-hidden="true"
              />
            )}
          </Disclosure.Button>
          <Transition
            className="overflow-hidden"
            enter="transition-all linear duration-[900ms]"
            enterFrom="transform max-h-0"
            enterTo="absolute z-10 transform w-screen max-h-screen bg-slate-600"
            leave="transition-all linear duration-[900ms]"
            leaveFrom="absolute z-10 transform  w-screen max-h-screen bg-slate-600"
            leaveTo="absolute z-10 transform w-screen max-h-0 bg-slate-600"
          >
            <Disclosure.Panel>
              <div className="space-y-1 h-screen px-2 pb-3 pt-2 bg-light-background dark:bg-dark-background">
                <div>Menu Options</div>
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      )}
    </Disclosure>
  );
}
