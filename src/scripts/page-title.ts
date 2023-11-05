export type SitemapPage = {
  path: string;
  title: string;
  children?: SitemapPage[];
};

export async function getChildrenFromPathname(
  pathname: string
): Promise<SitemapPage[]> {
  // load data/sitemap.json
  const sitemap: SitemapPage = await import("../data/sitemap.json");

  // Split the pathname into segments, ignoring the leading slash
  const segments = pathname.split("/").filter(Boolean);

  let currentChildren = sitemap.children || [];
  let foundChildren = currentChildren; // Start with the root children as the default

  for (const segment of segments) {
    const fullPath = "/" + segment;
    const child = currentChildren.find((child) => child.path === fullPath);

    if (child) {
      // If we find the child, we update the foundChildren
      foundChildren = child.children || [];
      currentChildren = foundChildren;
    } else {
      // If the path segment is not found, break the loop as we want to return the last found children
      break;
    }
  }

  // Return the children of the last valid segment found or root if none
  return foundChildren;
}

export async function getPageMetadata(
  pathname: string,
  sitemap: SitemapPage | undefined = undefined
) {
  sitemap = sitemap || (await import("../data/sitemap.json"));

  if (pathname == sitemap.path) return sitemap;
  const pieces = pathname.split("/").filter(Boolean);
  for (let piece = 0; piece < pieces.length; piece++) {
    const fullPath = "/" + pieces.slice(0, piece).join("/");
    const child = sitemap.children?.find((child) => child.path === fullPath);
    if (child) {
      return getPageMetadata(fullPath, child);
    }
  }
  return sitemap;
}
