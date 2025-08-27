"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc =
    mounted && resolvedTheme === "dark" ? "/logo-light-text.png" : "/logo-dark-text.png";

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800" aria-label="Footer">
      <div className="flex flex-col items-center text-center">
        <Link href="/" className="flex items-center justify-center mb-4">
          {mounted ? (
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="M.Fareed personal logo"
              width={200}
              height={50}
              className="h-12 w-auto"
            />
          ) : (
            <div className="h-12 w-[200px] bg-gray-100 dark:bg-gray-900 animate-pulse" /> 
          )}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          React Developer building high-quality, scalable websites.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} M.Fareed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}