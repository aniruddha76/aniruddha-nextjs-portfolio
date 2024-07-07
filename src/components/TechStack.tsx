"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


export default function TechStack() {
    const techstack = [
        {
            link: "/logo/html.png",
            title: "HTML",
        },
        {
            link: "/logo/css.png",
            title: "CSS",
        },
        {
            link: "/logo/js.png",
            title: "JavaScript",
        },
        {
            link: "/logo/bootstraplogo.png",
            title: "Bootstrap",
        },
        {
            link: "/logo/reactlogo.png",
            title: "React JS",
        },
        {
            link: "/logo/nodejs.png",
            title: "Node JS",
        },
        {
            link: "/logo/typescript.png",
            title: "Typescript",
        },
        {
            link: "/logo/tailwind.png",
            title: "Tailwind",
        },
        {
            link: "/logo/express.png",
            title: "Express JS",
        },
        {
            link: "/logo/electronlogo.svg",
            title: "Electron JS",
        },
        {
            link: "/logo/git.png",
            title: "Git",
        },
        {
            link: "/logo/githublogo.png",
            title: "GitHub",
        },
        {
            link: "/logo/discord.png",
            title: "Discord JS",
        },
        {
            link: "/logo/vercel.png",
            title: "Vercel",
        },
        {
            link: "/logo/wordpress.png",
            title: "Wordpress",
        },
        {
            link: "/logo/figma.png",
            title: "Figma",
        },
        {
            link: "/logo/canvalogo.png",
            title: "Canva",
        },
    ];

    return (
        <div id="techstack">
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Tech Stack
                </h1>
                <InfiniteMovingCards
                    items={techstack}
                    direction="left"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={techstack}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    )
}