import style from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <nav className={style.nav}>
        <ul>
          <li className="text-white">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="text-white">
            <Link href="/dashboard/users/1">Users1</Link>
          </li>
          <li className="text-white">
            <Link href="/dashboard/users/2">Users2</Link>
          </li>
          <li className="text-white">
            <Link href="/dashboard/users/3">Users3</Link>
          </li>
          <li className="text-white">
            <Link href="/dashboard/api">Api</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
