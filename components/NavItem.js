import Link from "next/link";
export function NavItem({ text, href, active }) {
  return (
    <Link href={href}>
      <a
        className={`nav__item ${
          active ? "active" : ""
        }`}
      >
        {text}
      </a>
    </Link>
  );
};

// export default NavItem;