"use client";

import Link from "next/link";

export function ShowAllProjectButton() {
    return (
        <center className="pb-8">
            <Link href='https://projects-showcase-wine.vercel.app/' target="_blank">
                <button className="inline-flex h-12 w-40 animate-shimmer items-center justify-center rounded-full border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Show All
                </button>
            </Link>
        </center>
    );
}
