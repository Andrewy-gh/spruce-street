import NavBarDesktop from "./desktop/NavBarDesktop";
import NavBarMobile from "./mobile/NavBarMobile";
import { navigation } from "../../data";

export default function Navbar() {
  return (
    <nav>
      <NavBarDesktop navigation={navigation} />
      <NavBarMobile navigation={navigation} />
    </nav>
  );
}
