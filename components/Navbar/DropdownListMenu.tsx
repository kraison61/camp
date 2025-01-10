import { AlignLeft } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import Link from "next/link";

import { links } from "@/utils/links";
import { SignOutButton } from "@clerk/nextjs";
import SignOutLinks from "./SignOutLinks";

const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {links.map((item, index) => {
          return (
            <DropdownMenuItem key={index}>
              <Link href={item.href}>{item.label}</Link>
            </DropdownMenuItem>
          );
        })}

        <SignOutLinks />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
