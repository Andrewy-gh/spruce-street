import MenuMobile from './MenuMobile';
export default function NavBarMobile() {
  return (
    <div className="md:hidden flex justify-between bg-dark-secondary">
      <MenuMobile />
      <div className="p-2">Logo</div>
    </div>
  );
}
