'use client'
import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

export default function HeroSection() {
    const words = [`Web Developer`, "Frontend Developer", "UI/UX Designer", ""];

    return (
        <div className="h-[40rem] flex flex-col justify-center items-center px-4" id="home">
            <div className="text-center text-xl sm:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <h4 className="text-xl sm:text-2xl">Hello! This is,</h4>
                <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Aniruddha Thakur
                </h1>
                I&apos;m a
                <FlipWords words={words} />
            </div>

            <br /><br />

            <div className="flex gap-2 z-10">
                <Link href={'mailto:aniruddhathakur76@gmail.com'} target="_blank" passHref>
                <button className="inline-flex h-12 w-40 animate-shimmer items-center justify-center rounded-xl border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Let's Talk
                </button>
                </Link>

                <Link href={'https://drive.google.com/file/d/1qMy1mdC0JKDZk_OniWd51Hu8WVgXDPl0/view?usp=sharing'} target="_blank" passHref>
                    <button className="inline-flex h-12 w-40 resume-btn items-center justify-center rounded-xl border border-white px-6 font-medium text-white transition-all hover:scale-110">
                        Resume
                    </button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    )
}