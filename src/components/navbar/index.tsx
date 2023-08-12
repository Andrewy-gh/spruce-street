import NavBarDesktop from './NavBarDesktop';
import NavBarMobile from './mobile/NavBarMobile';

export default function Navbar() {
  return (
    <nav>
      <NavBarDesktop />
      <NavBarMobile />
    </nav>
  );
}
