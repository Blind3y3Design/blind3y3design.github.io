const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");
const fs = require('fs');
const Image = require("@11ty/eleventy-img");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const filters = require("./src/assets/filters.js");
const tag_aliases = require("./src/data/tag_aliases.json");

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

function getSvgContent(file) {
    let relativeFilePath = `${file}`;
    let data = fs.readFileSync(relativeFilePath, 
    function(err, contents) {
        if (err) return err
        return contents
    });

    return data.toString('utf8');
}
 

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(emojiReadTime, { showEmoji: false });

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/scripts/");

    eleventyConfig.addShortcode("image", imageShortcode);
    eleventyConfig.addShortcode("bookImage", bookImageShortcode);
    eleventyConfig.addShortcode("svg", getSvgContent);
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    for (let name in filters) {
		eleventyConfig.addFilter(name, filters[name]);
	}

    eleventyConfig.addCollection("postsByTag", (collectionApi) => {
		const posts = collectionApi.getFilteredByTag("posts");
		let ret = {};

		for (let post of posts) {
			for (let tag of post.data.tags) {
				if (filters.is_real_tag(tag)) {
					ret[tag] ??= [];
					ret[tag].push(post);
				}
			}
		}

		// Now sort, and reconstruct the object
		ret = Object.fromEntries(Object.entries(ret).sort((a, b) => b[1].length - a[1].length));

		// Now add aliases
		for (let alias in tag_aliases) {
			let aliasOf = tag_aliases[alias];
			if (ret[aliasOf]) {
				ret[aliasOf].aliases ??= [];
				ret[aliasOf].aliases.push(alias);
			}
		}

		return ret;
	});

    eleventyConfig.addCollection("postsYearList", (collection) => {
        const posts = collection.getFilteredByTag('posts').reverse();
        const years = posts.map(post => post.date.getFullYear());
        const uniqueYears = [...new Set(years)];

        const postsByYear = uniqueYears.reduce((prev, year) => {
            const filteredPosts = posts.filter(post => post.date.getFullYear() === year);

            return [
                ...prev,
                [year, filteredPosts]
            ]
        }, []);

        return postsByYear;
    });

    eleventyConfig.addCollection("postsByYear", (collection) => {
        const posts = collection.getFilteredByTag('posts').reverse();
        const ret = {};

		for (let post of posts) {
			let key = post.date.getFullYear();
			ret[key] ??= [];
			ret[key].push(post);
		}

		return ret;
    });

    eleventyConfig.addCollection("workByYear", (collection) => {
        const work = collection.getFilteredByTag('work').reverse();
        const years = work.map(post => post.date.getFullYear());
        const uniqueYears = [...new Set(years)];

        const workByYear = uniqueYears.reduce((prev, year) => {
            const filteredwork = work.filter(post => post.date.getFullYear() === year);

            return [
                ...prev,
                [year, filteredwork]
            ]
        }, []);

        return workByYear;
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};