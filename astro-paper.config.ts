import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://x-files.io.vn/",
    title: "X Files",
    description: "Little memories in 2026, during entrance exam preparation",
    author: "vcn",
    profile: "https://x-files.io.vn/about",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Bangkok",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/" },
    { name: "x",        url: "https://x.com/" },
    { name: "linkedin", url: "https://www.linkedin.com/" }
  ],
  shareLinks: [    
    { name: "x",        url: "https://x.com/intent/post?url=" },    
  ],
});