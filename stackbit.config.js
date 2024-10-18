export default {
  stackbitVersion: "~0.6.0",
  cmsName: "git",
  ssgName: "custom",
  devCommand: "npm run dev -- -p {PORT}",
  experimental: {
    ssg: {
      name: "Nuxt3",
      logPatterns: {
        up: "Local:    http",
      },
      passthrough: ["/vite-hmr/**"],
    },
  },
  nodeVersion: "18",
  dataDir: "content/data",
  pagesDir: "content/pages",
  pageLayoutKey: "type",
  assets: {
    referenceType: "static",
    staticDir: "public",
    uploadDir: "stackbitImages",
    publicPath: "/",
  },
  contentModels: {
    Page: {
      isPage: true,
      urlPath: "/{slug}",
      newFilePath: "{slug}.md",
    },
  },
};
