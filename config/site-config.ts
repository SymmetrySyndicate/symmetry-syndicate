export type GridItemLayout = "1x2" | "2x2";
export type GridItemType = "social";

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
}
const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "Youtube",
    icon: "youtube",
    username: "@SymmetrySyndicate",
    description: "Developer Collective trying to build cool stuff",
    color: "#FF0000",
    buttonTitle: "Subscribe",
    buttonLink: "https://www.youtube.com/@SymmetrySyndicate",
    buttonSecondaryText: "0",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Discord",
    icon: "discord",
    username: "Symmetry Syndicate",
    buttonTitle: "Join",
    buttonLink: "https://discord.gg/DbeJ6V9rvq",
    buttonSecondaryText: "0",
    color: "#5865F2",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@SymmetrySyndicate",
    buttonTitle: "Follow",
    buttonSecondaryText: "0",
    buttonLink: "https://github.com/SymmetrySyndicate",
    color: "#070707",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Twitter",
    icon: "twitter",
    username: "@SymmSyndicate",
    buttonTitle: "Follow",
    buttonLink: "https://twitter.com/SymmSyndicate",
    buttonSecondaryText: "0",
    color: "#1DA1F2",
    description: "Developer Collective trying to build cool stuff",
  },
];

export const siteConfig = {
  name: "Symmetry Syndicate",
  description: "Design and Develop",
  bio: "Developer Collective trying to build cool stuff",
  social: "Github",
  socialLink: "https://github.com/SymmetrySyndicate",
  email: "symmetry.syndicate@gmail.com",
  items: GridItems,
} as const;
