import MenuMobile from './MenuMobile';
export default function NavBarMobile() {
  return (
    <div className="md:hidden flex justify-between bg-dark-secondary py-6">
      <MenuMobile />
      <div>Logo</div>
    </div>
  );
}
