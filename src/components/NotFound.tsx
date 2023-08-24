import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline';
import construction from '../assets/construction.svg';

export default function NotFound() {
  return (
    <div className="w-container h-full mx-auto flex flex-col md:flex-row justify-center items-center gap-space-m my-space-2xl">
      <div className="flex flex-col gap-space-s justify-center items-center">
        <h1 className="text-primary-secondary font-body text-step-3 font-bold text-center">
          Look's like you took a wrong turn. This page is under construction.
        </h1>

        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="text-primary-secondary">Return</div>
            <HomeIcon className="inline m-0 p-0 text-primary-secondary h-6 w-6" />
          </div>
        </Link>
      </div>
      <div className="max-w-[50ch]">
        <img
          src={construction}
          alt="two construction workers building a house"
        ></img>
      </div>
    </div>
  );
}
