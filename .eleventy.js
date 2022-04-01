module.exports = function(eleventyConfig) {
	let handlebars = require("handlebars");
	eleventyConfig.setLibrary("hbs", handlebars);
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	return {
		dir: {
			input: "./",
			includes: "includes"
		},
		markdownTemplateEngine: "hbs",
		htmlTemplateEngine: "hbs",
		dataTemplateEngine: "hbs"
	}
};