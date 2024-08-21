"use client";

import Link from "next/link";

export function ShowAllProjectButton() {
    return (
        <Link href='https://projects-showcase-wine.vercel.app/' target="_blank">
            <center>
                <button className="bg-transperent no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 text-xl rounded-full p-px leading-6 text-white inline-block transition-all">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(50%_70%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_0%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:scale-105" />
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-transperent py-4 px-4 transition-transform transform group-hover:scale-105">
                        <span>
                            Show All Projects
                        </span>
                        <svg
                            fill="none"
                            height="30"
                            viewBox="0 0 24 24"
                            width="30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-purple-800/100 to-purple-800/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
            </center>
        </Link>
    );
}