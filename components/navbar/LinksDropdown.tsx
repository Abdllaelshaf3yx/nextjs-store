import { Suspense } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import UserIcon from "./UserIcon";
import { auth } from "@clerk/nextjs/server";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

async function LinksDropdown() {
  const { userId } = await auth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-25">
          <LuAlignLeft className="w-6 h-6" />
          <Suspense
            fallback={<div className="w-6 h-6 bg-primary rounded-full" />}
          >
            <UserIcon />
          </Suspense>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {userId ? (
          <>
            {links.map((link) => {
              return (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="capitalize w-full">
                    {link.label}
                  </Link>
                </DropdownMenuItem>

              );
            })}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOutLink />
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button className="w-full text-left">Login</button>
              </SignInButton>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button className="w-full text-left">Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
