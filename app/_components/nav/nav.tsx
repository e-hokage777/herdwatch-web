import Link from "next/link";

export default function NavBar() {
  return (
    <div className="py-8 px-4 fixed left-0 top-0 z-50 flex justify-between items-center w-full bg-black text-white">
      <Link href="#hero" className="text-2xl font-bold">
        Herdwatch
      </Link>
      <nav className="hidden md:block">
        <ul className="flex space-x-4">
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
      </nav>
    </div>
  );
}
