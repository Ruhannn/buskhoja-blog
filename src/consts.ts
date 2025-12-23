import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  NAME: "BusKhoja Blog",
  EMAIL: "buskhoja@info.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "BusKhoja Blog",
  DESCRIPTION: "Welcome to the BusKhoja Blog! Read about the cutting-edge technology we use to deliver fast,bus info and essential emergency services.",
};

export const BLOG: Metadata = {
  TITLE: "All Blog Posts",
  DESCRIPTION: "A collection of articles covering topics related to public transit features, performance engineering, secure infrastructure, and the latest updates to the BusKhoja platform.",
};
export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://x.com/ruhan_17",
  },
  {
    NAME: "github",
    HREF: "https://github.com/Ruhannn",
  },
];
