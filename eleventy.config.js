import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

const STATUS_ORDER = { active: 0, pilot: 1, archived: 2 };

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ assets: "assets" });
  eleventyConfig.ignores.add("content/README.md");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: { name: "entry", limit: 0 },
    metadata: {
      language: "en",
      title: "Civic Workbench",
      subtitle: "An informal incubator for civic technology.",
      base: "https://civicworkbench.com/",
      author: { name: "Civic Workbench" },
    },
  });

  eleventyConfig.addCollection("projectsSorted", (collectionApi) =>
    collectionApi.getFilteredByTag("project").sort((first, second) => {
      const rankDiff =
        (STATUS_ORDER[first.data.status] ?? 9) -
        (STATUS_ORDER[second.data.status] ?? 9);
      return rankDiff || first.data.name.localeCompare(second.data.name);
    })
  );

  eleventyConfig.addFilter("limit", (list, count) => list.slice(0, count));

  eleventyConfig.addFilter("dateDisplay", (dateValue) =>
    new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  eleventyConfig.addFilter("dateShort", (dateValue) =>
    new Date(dateValue).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      timeZone: "UTC",
    })
  );

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
