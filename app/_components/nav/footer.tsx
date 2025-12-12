import { Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full py-8 flex justify-between items-center px-8">
      <div>lINKS AND SUCK</div>
      <div>
        <h4>CONTACT</h4>
        <div className="flex flex-row gap-2">
          <Linkedin className="w-8 h-8" />
          <Facebook className="w-8 h-8" />
          <Twitter className="w-8 h-8" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-5xl">
          HERD<strong>WATCH</strong>
        </div>
        <p className="text-sm">&copy; 2025. All rights reserved</p>
      </div>
    </div>
  );
}
