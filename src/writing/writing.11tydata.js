module.exports = {
	eleventyComputed: {
		is_post: data => {
			return data.tags.includes("posts");
		},
	}
};