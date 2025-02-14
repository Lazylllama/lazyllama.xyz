import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Simon Klövdahl",
  initials: "SK",
  url: "https://lazyllama.xyz",
  location: "Sweden",
  locationLink: "https://www.google.com/maps/place/sweden",
  description:
    "Student Front-end Developer. Coding as a hobby at @LCHoldings, where I work on various projects.",
  summary:
    "Still going through school, passion for coding and design. I have been working on various projects for the past year, and I am always looking for new challenges. Currently working on Beacon, a community/player management tool for server on the GTAV multiplayer modification [FiveM](https://fivem.net/). I use bun btw",
  avatarUrl: "/media/LazyllamaV2-Logo.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Photoshop",
    "Vue",
    "Nuxt",
    "TailwindCSS",
    "Lua",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "me@lazyllama.xyz",
    tel: "+46736570708",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/MgxfVbY",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/KgDnNAQ",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/mE2ycpe",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:me@lazyllama.xyz",
        icon: Icons.email,
        navbar: true,
      },
      "Cal.com": {
        name: "Schedule a meeting",
        url: "https://cal.com/lazyllama",
        icon: Icons.calendar,
        navbar: true,
      }
    },
  },

  work: [
    {
      company: "LCHoldings",
      href: "https://github.com/lcholdings",
      badges: [],
      location: "Remote",
      title: "Front-end Engineer",
      logoUrl: "/lcholdings.png",
      start: "Feb 2023",
      end: null,
      description:
        "Working on various projects as frontend developer, including Beacon, a community/player management tool for servers on the GTAV multiplayer modification FiveM. You can see all projects on the LCHoldings Github.",
    },
  ],
  educationEnabled: false,
  education: [
    {
      school: "N/A",
      href: "https://buildspace.so",
      degree: "N/A",
      logoUrl: "/n-a.jpg",
      start: "2045",
      end: "2054",
    },
  ],
  projects: [
    {
      title: "Beacon - FiveM Server Management",
      href: "",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "Beacon is a community/player management tool for servers on the GTAV multiplayer modification [FiveM](https://fivem.net). The website is built with [JStack](https://jstack.app), TailwindCSS and Shadcn UI. The project is currently in development.",
      technologies: [
        "Next.js",
        "Typescript",
        "Hono",
        "TailwindCSS",
        "Shadcn UI",
        "JStack",
        "PostgreSQL",
        "Vercel"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://automatic.chat",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      video: "",
      noImage: true
    },
    {
      title: "LCDevelopment Portfolio",
      href: "https://lcdevelopment.net",
      dates: "Aug 1st 2024 - Sept 1st 2024",
      active: true,
      description:
        "This was built during [Hack Club Arcade 2024](https://hackclub.com/arcade). The website is built with Nuxt.js, TailwindCSS and [Sanity CMS](https://sanity.io). As of writing this, we have already moved from Vue to React and the website needs a redo.",
      technologies: [
        "Nuxt",
        "TypeScript",
        "Sanity",
        "Tailwind CSS",
        "Vue"
      ],
      links: [
        {
          type: "Website",
          href: "https://lcdevelopment.net",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LCHoldings/LCDevelopment-Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screenshots/lcdevelopment.png",
      video: "",
      noImage: false
    },
    {
      title: "Lindemark Fastigheter",
      href: "https://lindemark.nu",
      dates: "Sept 2024 - Present",
      active: true,
      description:
        "At LCDevelopment, we built a website for Lindemark Fastigheter AB, a real estate company in Sweden. The website is built with Nuxt.js, TailwindCSS and [Sanity CMS](https://sanity.io). We actively maintain it and plan to remake it in React.",
      technologies: [
        "Nuxt",
        "TypeScript",
        "Sanity",
        "Tailwind CSS",
        "Vue",
      ],
      links: [
        {
          type: "Website",
          href: "https://lindemark.nu",
          icon: <Icons.globe className="size-3" />,
        },

      ],
      image: "/screenshots/lfab.png",
      video: "",
      noImage: false
    },
    {
      title: "HCB Fee Calculator",
      href: "https://hcb-fee-calculator.netlify.app/",
      dates: "Dec 23 2024 - Dec 29 2024",
      active: true,
      description:
        "Created during [Hack Club High Seas 2024](https://hackclub.com/highseas). The website is built with Next.js, TailwindCSS and Shadcn UI. The website is a fee calculator for [HCB](https://hackclub.com/fiscal-sponsorship/) organizations.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://hcb-fee-calculator.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/lcholdings/hcb-fee-calculator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/screenshots/hfc.png",
      video: "",
      noImage: false
    },
  ],
  hackathonsEnabled: false,
  hackathons: [
    {
      title: "Nowhere",
      dates: "N/A",
      location: "N/A",
      description:
        "N/A",
      image: "",
      links: [],
    },
    // {
    //   title: "DeveloperWeek Hackathon",
    //   dates: "February 3rd - 4th, 2018",
    //   location: "San Francisco, California",
    //   description:
    //     "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
    //   links: [
    //     {
    //       title: "Github",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/cryptotrends/cryptotrends",
    //     },
    //   ],
    // },
  ],
  calcom: "https://cal.com/lazyllama"
} as const;
