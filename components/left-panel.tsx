"use client";
import { siteConfig } from "@/config/site-config";
import { Github, Mail } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";

const LeftPanel = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      {/* Top Container */}
      <div>
        <div>
          <Image
            src="/icon.svg"
            width="120"
            height="120"
            alt="Symmetry Syndicate Logo"
            placeholder="blur"
            blurDataURL="/icon.svg"
            priority
            loading="eager"
          />
        </div>

        {/* Text Container */}
        <div className="mt-6">
          <div className="text-xl font-medium text-primary">
            {siteConfig.name}
          </div>
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.description}</h1>
          <p className="text-2xl font-light text-neutral-500">
            {siteConfig.bio}
          </p>
        </div>
        {/* Buttons Container */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${siteConfig.socialLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Github size="16" />
            {siteConfig.social}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact Us
          </a>
        </div>
        {/* Footer */}
        <div className="hidden mt-6 xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
