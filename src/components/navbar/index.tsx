import NavBarDesktop from './desktop/NavBarDesktop';
import NavBarMobile from './mobile/NavBarMobile';
import { navigation } from '../../data';
import MenuMobile from './mobile/MenuMobile';
import Accordion from './mobile/Accordion';
import MenuItemDesktop from './desktop/MenuItemDesktop';

export default function Navbar() {
  return (
    <nav>
      <NavBarDesktop>
        {navigation.map(({ id, section, links }) => (
          <MenuItemDesktop key={id} header={section} body={links} />
        ))}
      </NavBarDesktop>
      <NavBarMobile>
        <MenuMobile>
          {navigation.map(({ id, section, links }) => (
            <li key={id} className="mb-space-s">
              <Accordion header={section} body={links} />
            </li>
          ))}
        </MenuMobile>
      </NavBarMobile>
    </nav>
  );
}
