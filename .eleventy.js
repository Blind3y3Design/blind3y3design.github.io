const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        // widths: [300, 600],
        formats: ["avif", "webp", "jpeg", "png"],
        outputDir: "./public/img/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes);
}

async function bookImageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        // widths: [300, 600],
        formats: ["avif", "webp", "jpeg"],
        outputDir: "./public/img/"
    });

    let lowsrc = metadata.jpeg[0];

    // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return `<picture class="book-preview__image">
        ${Object.values(metadata).map(imageFormat => {
        return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
        }).join("\n")}
        <img
            src="${lowsrc.url}"
            width="${lowsrc.width}"
            height="${lowsrc.height}"
            alt="Cover of ${alt}"
            loading="lazy"
            decoding="async">
        </picture>`;
}

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(emojiReadTime, { showEmoji: false });

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/scripts/");

    eleventyConfig.addLiquidShortcode("image", imageShortcode);
    eleventyConfig.addLiquidShortcode("bookImage", bookImageShortcode);
    
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
          zone: "America/Chicago",
        }).toLocaleString(DateTime.DATE_MED);
      });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};