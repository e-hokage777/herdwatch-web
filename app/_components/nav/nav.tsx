import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function NavBar() {
  return (
    <div className="py-4 px-4 fixed left-0 top-0 z-50 flex justify-between items-center w-full bg-primary text-white font-ubuntu">
      <Link href="#hero" className="text-2xl font-bold block">
        <img className="size-30 h-16" src={"/svgs/logo.svg"} alt="logo" />
      </Link>
      <nav>
        <ul className=" space-x-4 hidden md:flex">
          <li>
            <Link href="#hero">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#features">Features</Link>
          </li>
          <li>
            <Link href="#benefits">Benefits</Link>
          </li>
          <li>
            <Link href="#sponsors">Sponsors</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <DropdownNav className="block md:hidden"/>
      </nav>
    </div>
  );
}

function DropdownNav({className}: {className?: string}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Menu className="size-8" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link href="#home">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#about">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#features">Features</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#benefits">Benefits</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#sponsors">Sponsors</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="#contact">Contact</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
