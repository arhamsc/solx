import { statusFilters } from "./filter_constants";

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "About us", url: "/aboutus" },
      // { title: "How it works?", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [{ title: "Contact us", url: "/contactus" }],
  },
  {
    title: "Socials",
    links: [
      {
        title: "Github",
        url: "https://www.github.com/arhamsc",
      },
      { title: "LinkedIn", url: "https://www.linkedin.com/arhamsc" },
    ],
  },
] as const;

export const avatarMenuLinks = [
  {
    title: "My SolXs",
    link: "/profile?type=mySolXs",
  },
  {
    title: "My Purchases",
    link: "/profile?type=myPurchases",
  },
];

export { statusFilters };
