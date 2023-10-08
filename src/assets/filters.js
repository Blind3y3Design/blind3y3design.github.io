const { DateTime } = require("luxon");
const capitalizations = require("../data/capitalizations.json");
const tagNames = require("../data/tag_names.json");
const fakeTags = new Set(["posts", "all", "postsByYear", "postsByMonth"]);

const filters = {
	async pluralize(num, word) {
		let plur = (await import("plur")).default;
		return num + " " + plur(word, num);
	},

	format_tag(tag) {
		if (tag in tagNames) {
			return tagNames[tag] === true ? tag : tagNames[tag];
		}

		tag = (tag + "").replace(/-/g, " ");

		for (let capitalization of capitalizations) {
			let lowercase = capitalization.toLowerCase();
			let regex = new RegExp(`\\b${lowercase}(?=\\b|\\d)`, "gi");
			tag = tag.replace(regex, capitalization);
		}

		return tag.replace(/\b\w/g, l => l.toUpperCase());
	},

    is_real_tag (tag) {
		return !fakeTags.has(tag);
	},

	real_tags_only (tags) {
		return tags.filter(filters.is_real_tag);
	},

	postDate (dateObj) {
        return DateTime.fromJSDate(dateObj, {
          zone: "America/Chicago",
        }).toLocaleString(DateTime.DATE_MED);
    }
}

module.exports = filters;