"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navigation() {
  const path = usePathname();
  {
    path === "/" ? "하하" : "";
  }
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "💥" : ""}
        </li>
        <li>
          <Link href="/about-us">About us</Link>
          {path === "/about-us" ? "💥" : ""}
        </li>
      </ul>
    </nav>
  );
}
