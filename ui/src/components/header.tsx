"use client";

import { useEffect, useState } from "react";
import { AsteriskCircle, Burger } from "./header/icons";
import { Menu } from "./header/menu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      setIsMenuOpen(!mobile);
      setAnimationClass(mobile ? "" : "menu-enter-active");
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimationClass("menu-exit-active");
      setTimeout(() => {
        setIsMenuOpen(false);
        setAnimationClass("menu-exit");
      }, 50);
    } else {
      setIsMenuOpen(true);
      setAnimationClass("menu-enter");
      setTimeout(() => setAnimationClass("menu-enter-active"), 10);
    }
  };
  return (
    <header className="flex items-center-safe p-3 bg-card border-b border-border md:py-1">
      <Logo />
      {isMenuOpen && <Menu animation={animationClass} />}
      <button
        className="ml-auto px-2 text-card-foreground transition-all duration-50 hover:scale-110 md:sr-only"
        onClick={toggleMenu}
      >
        <Burger />
      </button>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center-safe gap-1">
      <AsteriskCircle />
      <span className="text-nowrap text-xl">Test Name</span>
    </div>
  );
}
