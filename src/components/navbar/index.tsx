import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './NavBarMobile';

export default function Navbar() {
  return (
    <nav>
      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
}
