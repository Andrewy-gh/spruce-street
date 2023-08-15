import MenuMobile from './MenuMobile';
export default function NavBarMobile() {
  return (
    <div className="lg:hidden flex justify-between bg-primary-secondary">
      <MenuMobile />
      <div className="px-2 py-4 font-accent text-light text-step-1 font-medium">
        Spruce Street
      </div>
    </div>
  );
}
