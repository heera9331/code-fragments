"use client";

import { Moon, Sun, Code2, Search } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-16 grid grid-cols-12 items-center justify-between">
        <div className="flex items-center gap-2 col-span-2">
          <Code2 className="h-6 w-6" />
          <span className="text-xl font-bold">
            <Link href={"/"}>Code Fragments</Link>
          </span>
        </div>
        <div className="col-span-9 flex justify-end mr-4">
          <Input className="w-100" placeholder="Serch" />
        </div>
        <div className="col-span-1">
          <Button
            className=""
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
