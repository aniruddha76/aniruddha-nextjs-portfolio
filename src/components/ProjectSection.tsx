"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { IconEye, IconGitFork } from "@tabler/icons-react";

export default function ProjectSection() {

  const dummyContent = [
    {
      title: "Studios Repo",
      description: (
        <>
          <p>
            A dynamic and user-friendly application built with React.js and MongoDB,
            designed to help students efficiently manage and organize their notes.
            This comprehensive project showcases robust CRUD functionality,
            allowing for the easy creation, retrieval, updating, and deletion of notes.
          </p>
          <br />
          <p>
            It features seamless user authentication to ensure secure access, and a responsive,
            intuitive UI that adapts to various devices and screen sizes. With advanced search and categorization options,
            it offers a streamlined and personalized experience, making it an essential tool for academic success and productivity.
          </p>
        </>
      ),
      badge: "College Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/StudiousRepo",
      liveLink: "_blank",
    },
    {
      title: "Insta Downloader Beta 0.3",
      description: (
        <>
          <p>
            A handy and powerful Chrome extension that allows users to effortlessly
            download Instagram photos and profile pictures with just a few clicks.
            This project highlights an easy to use design, ensuring a smooth user experience,
            and features quick installation for immediate use.
          </p>
          <br />
          <p>
            With seamless integration with Instagram, it provides a reliable and efficient solution for saving your
            favorite content directly to your device. Whether for personal enjoyment or professional use,
            this extension is an invaluable tool for anyone looking to easily capture and store Instagram visuals.
          </p>
        </>
      ),
      badge: "Personal Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/insta-downloader",
      liveLink: "https://github.com/aniruddha76/insta-downloader/releases/tag/extension",
    },
    {
      title: "Express Share",
      description: (
        <>
          <p>
            A powerful and efficient file-sharing application built with Express.js and Multer,
            designed to facilitate quick and secure file transfers. This comprehensive project features a clean and intuitive
            interface, making it easy for users of all levels to navigate and utilize.
            With efficient file upload and download capabilities, it ensures smooth and rapid data transfer,
            while robust backend functionality provides stability and reliability
          </p>
          <br />
          <p>
            Enhanced security measures protect user data, making it an ideal solution for hassle-free and trustworthy file sharing,
            whether for personal, academic, or professional use.
          </p>
        </>
      ),
      badge: "Personal Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/Express-Share",
      liveLink: "https://fileshare-express.vercel.app",
    },
    {
      title: "Twine Video Calling",
      description: (
        <>
          <p>
            An advanced and innovative video calling application developed with JavaScript and WebRTC,
            offering high-quality, real-time video communication.
            This project features seamless connectivity and crystal-clear audio and video,
            ensuring a smooth and engaging user experience. With its user-friendly interface,
            users can easily initiate and manage video calls,
            making it accessible to individuals of all technical levels.
          </p>
          <br />
          <p>
            The application boasts robust performance and reliability, supported by strong backend infrastructure.
            Ideal for both personal and professional use, Twine Video Calling provides a versatile and essential tool
            for staying connected with family, friends, and colleagues, regardless of distance.
          </p>
        </>
      ),
      badge: "Personal Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/twine-video-calling",
      liveLink: "https://twine-video-calling.vercel.app/",
    },
    {
      title: "Beatbox Discord Bot",
      description: (
        <>
          <p>
            An engaging and versatile Discord bot developed with Discord.js,
            designed to significantly enhance your server experience with music and entertainment.
            This project showcases responsive commands that allow users to easily control playback and manage playlists,
            ensuring a smooth and enjoyable user experience. With high-quality audio streaming,
            it delivers clear and uninterrupted music, making every session more enjoyable.
          </p>
          <br />
          <p>
            The bot features a user-friendly interface, making it accessible and easy to use for all server members.
            Packed with entertaining features and robust performance, Beatbox Discord Bot is a fun and valuable
            addition to any Discord community, perfect for both casual listening and lively events.
          </p>
        </>
      ),
      badge: "Personal Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/Beatbox",
      liveLink: "https://discord.com/oauth2/authorize?client_id=1213534821289033739&permissions=8&scope=bot",
    },
    {
      title: "Blockyfy",
      description: (
        <>
          <p>
            An essential and powerful Chrome extension designed to block intrusive ads on websites,
            significantly enhancing the browsing experience. This project features highly efficient ad-blocking
            algorithms that effectively eliminate unwanted ads, pop-ups, and banners,
            ensuring a smooth and uninterrupted web surfing experience. Seamlessly integrated with Chrome,
            it works flawlessly without slowing down your browser.
          </p>
          <br />
          <p>
            The extension also offers user-friendly customization options,
            allowing you to tailor the ad-blocking settings to your preferences. Providing a clean,
            distraction-free environment, Blockyfy Chrome Extension is an invaluable tool for anyone looking to improve
            their online experience and focus on the content that matters.
          </p>
        </>
      ),
      badge: "Personal Project",
      image: "/",
      repoLink: "https://github.com/aniruddha76/Blockify",
      liveLink: "_blank",
    },
  ];

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative text-neutral-500" id="project">
        <h1 className="text-4xl text-white mb-4 font-[500]">Some of the Projects I Have Done</h1>
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4 text-white")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  width={1000}
                  height={100}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>

            <div className="flex gap-2 mt-2 text-white transition-all">
              <Link href={item.repoLink} className="border rounded-full px-4 py-2 justify-center items-center transition-all hover:-translate-y-1">
                <button className="flex">
                  <IconGitFork />&nbsp;<p>Github</p>
                </button>
              </Link>

              <Link href={item.liveLink} className="border rounded-full px-4 py-2 justify-center items-center transition-all hover:-translate-y-1">
                <button className="flex">
                  <IconEye />&nbsp;<p>Live</p>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}