"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconCode, IconCodeCircle, IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export default function Navbar() {
    const navItems = [
        {
          name: "Home",
          link: "/",
          icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Project",
          link: "#project",
          icon: <IconCode className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "About",
          link: "#aboutme",
          icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
          name: "Contact",
          link: "/contact",
          icon: (
            <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
          ),
        },
      ];

    return (
        <FloatingNav navItems={navItems} />
    )
}