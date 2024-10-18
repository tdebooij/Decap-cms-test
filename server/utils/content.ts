import frontmatter from "front-matter";

const sbConfig = {
  pagesDir: "content/pages",
  dataDir: "content/data",
};

/*
Loading local content from files: while in dev you could simply read files, for production you should:
(a) include needed files as server-side assets (see nitro.config.ts)
(b) read the file content via useStorage().getItem()
See: https://nitro.unjs.io/guide/introduction/assets
*/

async function readContent(itemName: string) {
  const storageKey = `assets/${itemName}`;
  const rawContent = await useStorage().getItem(storageKey);
  console.log(itemName, rawContent);

  if (!rawContent || typeof rawContent !== "string") return null;

  let content = null;
  const extension = itemName.split(".").pop();
  switch (extension) {
    case "md":
      const parsedMd = frontmatter(rawContent);
      if (
        typeof parsedMd.attributes === "object" &&
        parsedMd.attributes !== null
      ) {
        content = {
          ...parsedMd.attributes,
          body: parsedMd.body,
        };
      } else {
        throw new Error(`Invalid frontmatter attributes for item: ${itemName}`);
      }
      break;
    case "json":
      if (rawContent) content = JSON.parse(rawContent.toString());
      break;
    default:
      throw Error(`Unhandled item type: ${itemName}`);
  }

  content.__id = itemName;
  return content;
}

export async function urlToContent(url: string) {
  let itemName = sbConfig.pagesDir + url;
  if (itemName.endsWith("/")) itemName += "index";
  itemName += ".md";

  const content = await readContent(itemName);
  return content;
}
