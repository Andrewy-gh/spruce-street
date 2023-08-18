import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MenuItem from "./MenuItemDesktop";
import { Section } from "../../../types";

interface NavBarDesktopProps {
  navigation: Section[];
}
export default function NavBarDesktop({ navigation }: NavBarDesktopProps) {
  return (
    <div className="hidden lg:flex bg-primary-secondary py-4 px-space-l items-center justify-between">
      <div className="align-self-center justify-self-start font-accent text-light text-step-1 font-medium">
        Spruce Street
      </div>
      <div className="align-self-center justify-self-center flex">
        {/* <MenuItem header={'Plants'} body={bodyItems} />
        <MenuItem header={'Tools'} body={bodyItems} />
        <MenuItem header={'Care'} body={bodyItems} /> */}
        {navigation.map(({ id, section, links }) => (
          <MenuItem key={id} header={section} body={links} />
        ))}
      </div>
      <div className="align-self-center justify-self-end flex gap-space-xs">
        <MagnifyingGlassIcon className="text-light h-6 w-6 cursor-pointer" />
        <ShoppingBagIcon className="text-light h-6 w-6 cursor-pointer" />
        <UserCircleIcon className="text-light h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
}
// export default function NavBarDesktop({ navigation }: NavBarDesktopProps) {
//   return (
//     <div className="hidden lg:grid grid-cols-3 bg-primary-secondary py-4 px-space-l items-center justify-center">
//       <div className="align-self-center justify-self-start font-accent text-light text-step-1 font-medium">
//         Spruce Street
//       </div>
//       <div className="align-self-center justify-self-center flex grow">
//         {/* <MenuItem header={'Plants'} body={bodyItems} />
//         <MenuItem header={'Tools'} body={bodyItems} />
//         <MenuItem header={'Care'} body={bodyItems} /> */}
//         {navigation.map(({ id, section, links }) => (
//           <MenuItem key={id} header={section} body={links} />
//         ))}
//       </div>
//       <div className="align-self-center justify-self-end flex gap-space-xs">
//         <MagnifyingGlassIcon className="text-light h-6 w-6 cursor-pointer" />
//         <ShoppingBagIcon className="text-light h-6 w-6 cursor-pointer" />
//         <UserCircleIcon className="text-light h-6 w-6 cursor-pointer" />
//       </div>
//     </div>
//   );
// }
