export default function NavBarDesktop() {
  return (
    <nav>
      <div className="grid grid-cols-3 bg-dark-secondary py-6">
        <div className="place-self-start">Logo</div>
        <div className="place-self-center flex">
          <div className="relative inline-block group">
            <button className="text-light px-8">Plants</button>
            <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
            </div>
          </div>
          <div className="relative inline-block group">
            <button className="text-light px-8">Tools</button>
            <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
            </div>
          </div>
          <div className="relative inline-block group">
            <button className="text-light px-8">Care</button>
            <div className="hidden absolute pt-2 bg-dark-secondary min-w-[2rem] z-10 group-hover:block">
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
              <div className="pt-2 px-8 pb-4">
                <a href="#" className="text-black ">
                  Lorem
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="place-self-end">
          <span>Search</span>
          <span>User</span>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
}
