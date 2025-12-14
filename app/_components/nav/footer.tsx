import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full py-8">
      <div className="px-4 container mx-auto w-full flex flex-col gap-8 justify-between items-start md:flex-row md:gap-4">
        <div className="flex flex-col gap-4">
          <div>QUICK LINKS</div>
          <ul className="flex flex-col gap-2">
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
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h4>CONTACT</h4>
          <div className="flex flex-row gap-2">
            <Linkedin className="w-10 h-10" />
            <Facebook className="w-10 h-10" />
            <Twitter className="w-10 h-10" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-4xl flex gap-1 items-center">
            <img src="/svgs/logo-dark.svg" alt="logo" className="size-32" />
            <span>Aurok-1</span>
          </div>
          <p className="text-sm">&copy; 2025. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
