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
            <div className="text-center text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                <h4 className="text-2xl">Hello! This is,</h4>
                <h1 className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Aniruddha Thakur
                </h1>
                I&apos;m a
                <FlipWords words={words} />
            </div>

            <br /><br />

            <div className="flex gap-2 z-10">
                <Link href={'mailto:aniruddhathakur76@gmail.com'} passHref>
                    <Button
                        borderRadius="1rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Let's Talk!
                    </Button>
                </Link>

                <Link href={'https://drive.google.com/file/d/1qMy1mdC0JKDZk_OniWd51Hu8WVgXDPl0/view?usp=sharing'} passHref>
                    <Button
                        borderRadius="1rem"
                        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Resume
                    </Button>
                </Link>
            </div>
            <BackgroundBeams />
        </div>
    )
}