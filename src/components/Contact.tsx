import Link from "next/link";
import Footer from "./Footer";
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Image from "next/image";

export default function Contact() {
    return (
        <div id="contact" className=" bg-gradient-to-t from-violet-700 to-black">
            <div className="py-4">
                <h1 className="text-center text-4xl font-[700] text-violet-700">GetInTouch&#40;&#41;&#59;</h1>
            </div>

            <div className="flex justify-center items-center gap-3">
                <Link href={'https://www.instagram.com/aniiruddhaa_/'} target="_blank">
                    <button className="border rounded-full p-4 circular-fill"><IconBrandInstagram className="h-8 w-8" /></button>
                </Link>
                <Link href={'https://github.com/aniruddha76'} target="_blank">
                    <button className="border rounded-full p-4 circular-fill"><IconBrandGithub className="h-8 w-8" /></button>
                </Link>
                <Link href={'https://www.linkedin.com/in/aniruddha-thakur-b36482259/'} target="_blank">
                    <button className="border rounded-full p-4 circular-fill"><IconBrandLinkedin className="h-8 w-8" /></button>
                </Link>
                <Link href={'mailto:aniruddhathakur76@gmail.com'} target="_blank">
                    <button className="border rounded-full p-4 circular-fill"><IconMail className="h-8 w-8" /></button>
                </Link>
            </div>

            <h3 className="text-center text-neutral-400 mt-4">I&apos;m currently looking for new opportunities.<br /> 
                my inbox is always open. Whether you have a question or just want to say hi,<br />
                I&apos;ll try my best to get back to you as soon as I can!
            </h3>

            <center>
                <Image
                    src='/ani3d.png'
                    alt="Aniruddha"
                    width={300}
                    height={200}
                    className="object-cover"
                />
            </center>

            <Footer/>
        </div>
    )
}