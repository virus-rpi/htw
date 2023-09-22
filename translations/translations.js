const general = require("./general")
const news = require("./news")
const challenges = require("./challanges")
const hints = require("./hints")
const links = require("./links")

module.exports = getTranslationsString = (languageCode, stringKey) => {
    const keys = stringKey.split('.');
    const category = keys.splice(0, 1)[0];
    let lookup_table = {}
    switch (category) {
        case "general": lookup_table = general; break
        case "news": lookup_table = news; break
        case "hints": lookup_table = hints; break
        case "links": lookup_table = links; break
        case "challenges": lookup_table = challenges; break
    }
    let value = lookup_table[languageCode];

    for (const key of keys) {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            return undefined;
        }
    }

    return value;
};
