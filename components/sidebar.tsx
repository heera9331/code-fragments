"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Code2,
  Boxes,
  FileCode,
  Star,
  BookOpen,
  Settings,
  ChevronDown,
  Palette,
  Component,
  Layout,
  TestTube,
  Download,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sidebarItems = [
  {
    name: "Getting Started",
    icon: LayoutDashboard,
    items: [
      { name: "Dashboard", href: "/" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  {
    name: "Components",
    icon: Component,
    items: [
      { name: "Forms", href: "/components/forms" },
      { name: "Loaders", href: "/components/loaders" },
      { name: "Cards", href: "/components/cards" },
    ],
  },
  {
    name: "Templates",
    icon: Layout,
    items: [
      { name: "Admin Dashboards", href: "/templates/admin" },
      { name: "Landing Pages", href: "/templates/landing" },
      { name: "E-commerce", href: "/templates/ecommerce" },
    ],
  },
  {
    name: "Resources",
    icon: FileCode,
    items: [
      { name: "Code Snippets", href: "/snippets" },
      { name: "Color Palettes", href: "/palettes" },
      { name: "Icons", href: "/icons" },
    ],
  },
  {
    name: "Updates",
    icon: Download,
    items: [{ name: "Main", href: "/updates" }],
  },
  {
    name: "Tests",
    icon: TestTube,
    items: [{ name: "Main", href: "/tests" }],
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`hidden lg:flex h-[calc(100vh-4rem)] w-64 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className}`}
    >
      <div className="flex-1 overflow-y-auto py-6">
        <Accordion type="multiple" className="px-4 space-y-2">
          {sidebarItems.map((section) => (
            <AccordionItem
              key={section.name}
              value={section.name}
              className="border-none"
            >
              <AccordionTrigger className="py-2 hover:no-underline">
                <div className="flex items-center gap-2 text-sm">
                  <section.icon className="h-4 w-4" />
                  {section.name}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-2 space-y-1 mt-2">
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "my-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}
