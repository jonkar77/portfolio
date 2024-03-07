"use client"
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
    >
      <div>
      <Image
        src={src}
        alt={title}
        width={800}
        height={100}
        className="w-full object-contain bg-[#181818]"
      />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
        <p className="mt-2 text-black">{description}</p>
      </div>
    </Link>
  );
};