const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addCollection("posts", function(collection) {
        return collection.getFilteredByGlob("./blog/*.md");
    });
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_MED);
    });    

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("components");

    return {
        dir: {
            input: ".",
            output: "_site"
        }
    };
};