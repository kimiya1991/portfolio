"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/resume/", label: "Résumé" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="navWrap">
      <nav className="nav shell" aria-label="Primary">
        <Link className="brand" href="/#top" aria-label="Kimiya Jafarpor, home">
          KJ<span>.</span>
        </Link>
        <div className={`navLinks ${open ? "open" : ""}`} id="site-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname.startsWith("/resume") && link.href === "/resume/" ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a className="navCta mobileOnly" href="mailto:kimiya.tommy@gmail.com" onClick={() => setOpen(false)}>
            Email
          </a>
        </div>
        <div className="navEnd">
          <a className="navCta desktopOnly" href="mailto:kimiya.tommy@gmail.com">
            Email
          </a>
          <button
            type="button"
            className="menuToggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
