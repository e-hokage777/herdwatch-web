import Link from "next/link";

export default function NavBar() {
  return (
    <div className="py-8 px-4 fixed left-0 top-0 z-50 flex justify-between items-center w-full bg-black text-white">
      <h1 className="text-2xl font-bold">Herdwatch</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
