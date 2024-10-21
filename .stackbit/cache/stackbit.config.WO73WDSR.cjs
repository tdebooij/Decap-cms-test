"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var stackbit_config_default = {
  stackbitVersion: "~0.6.0",
  cmsName: "git",
  ssgName: "custom",
  devCommand: "npm run dev -- -p {PORT}",
  experimental: {
    ssg: {
      name: "Nuxt3",
      logPatterns: {
        up: "Local:    http"
      },
      passthrough: ["/vite-hmr/**"]
    }
  },
  nodeVersion: "18",
  dataDir: "content/data",
  pagesDir: "content/pages",
  pageLayoutKey: "type",
  assets: {
    referenceType: "static",
    staticDir: "public",
    uploadDir: "stackbitImages",
    publicPath: "/"
  },
  contentModels: {
    Page: {
      isPage: true,
      urlPath: "/{slug}",
      newFilePath: "{slug}.md"
    }
  }
};
//# sourceMappingURL=stackbit.config.WO73WDSR.cjs.map
