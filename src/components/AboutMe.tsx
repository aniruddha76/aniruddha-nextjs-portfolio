'use client'
import { cn } from "@/utils/cn";
import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconMicrophone,
    IconSignature,
    IconWorld,
} from "@tabler/icons-react";
import { motion } from 'framer-motion'
import Link from "next/link";

export default function AboutMe() {

    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full rounded-xl border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black overflow-hidden">
            <Image
                src="/aniruddha.jpg"
                alt="Aniruddha Thakur"
                width={1000}
                height={1000}       
                className="rounded-lg transition-all hover:scale-[1.1]"
            />
        </div>
    );

    const SkeletonFour = () => {
        const first = {
          initial: {
            x: 20,
            rotate: -5,
          },
          hover: {
            x: 0,
            rotate: 0,
          },
        };
        const second = {
          initial: {
            x: -20,
            rotate: 5,
          },
          hover: {
            x: 0,
            rotate: 0,
          },
        };
        return (
          <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
          >
            <motion.div
              variants={first}
              className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
              <Image
                src="/linkedin.png"
                alt="avatar"
                height="100"
                width="100"
                className="rounded-full h-10 w-10"
              />
              <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                I hunt jobs here
              </p>
              <Link href={'https://www.linkedin.com/in/aniruddha-thakur-b36482259/'} passHref>
                <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    LinkedIn
                </p>
              </Link>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
              <Image
                src="/github-1.png"
                alt="avatar"
                height="100"
                width="100"
                className="rounded-full h-10 w-10"
              />
              <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                I keep my codes here
              </p>
              <Link href={'https://github.com/aniruddha76'} passHref>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Github
                </p>
              </Link>
            </motion.div>
            <motion.div
              variants={second}
              className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
              <Image
                src="/instagram.png"
                alt="avatar"
                height="100"
                width="100"
                className="rounded-full h-10 w-10"
              />
              <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                I spend my time here
              </p>
              <Link href={'https://www.instagram.com/aniiruddhaa_/'} passHref>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Instagram
                </p>
              </Link>
            </motion.div>
          </motion.div>
        );
      };

    const items = [
        {
            title: "A Little About Me",
            description: "Hello! I'm Aniruddha Thakur, a passionate web developer and designer who thrives on creating stunning and intuitive frontend designs. My journey in the digital world began with a fascination for how design and code can come together to create seamless user experiences. As a web developer, I meticulously craft responsive and efficient code that brings my designs to life. My goal is to make every website not only look fantastic but also function flawlessly.",
            className: "md:col-span-2",
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            header: <Skeleton />,
            className: "md:col-span-1",
        },
        {
            title: "Soft Skills",
            description: "As a confident speaker and natural leader, I excel in communicating effectively with diverse teams and stakeholders. My strong organizational skills ensure that I consistently deliver high-quality work on time, fostering a reliable and efficient working environment.",
            className: "md:col-span-1",
            icon: <IconMicrophone className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Let's Connect!!",
            description:
                "Understand the impact of effective communication in our lives.",
            className: "md:col-span-2",
            header: <SkeletonFour />,
            icon: <IconWorld className="h-4 w-4 text-neutral-500" />,
        },
    ];

    return (
        <div className="p-8" id="aboutme">
            <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={item.className}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}