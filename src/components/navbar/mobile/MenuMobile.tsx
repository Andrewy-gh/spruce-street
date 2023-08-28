import { useState, useRef, useEffect } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

interface MenuMobileProps {
  children: React.ReactNode;
}

export default function MenuMobile({ children }: MenuMobileProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Function to handle click events outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        open
      ) {
        setOpen(false);
        document.body.classList.toggle("overflow-hidden");
      }
    };

    // Add the event listener
    window.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  const handleMenuIconClick = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
    document.body.classList.toggle("overflow-hidden");
  };

  const handleCloseIconClick = () => {
    setOpen(false);
    document.body.classList.toggle("overflow-hidden");
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
        className={`fixed bg-[#002626]/90 w-0 h-screen overflow-y-scroll text-white flex flex-col items-center gap-[15vw] text-step-0 overflow-hidden origin-left duration-500 ${
          open ? "w-[70vw]" : ""
        }`}
      >
        {/* Close Button */}
        <div className="self-start px-2 py-4" onClick={handleCloseIconClick}>
          <XMarkIcon
            className="block h-9 w-9 text-light cursor-pointer"
            aria-hidden="true"
          />
        </div>
        <ul className="w-full px-4">{children}</ul>
      </div>
    </>
  );
}
