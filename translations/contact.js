const secrets = require('../secrets-loader.js')

module.exports = contact_transelation = {
    "en": {
        "heading": "Contact / Imprint",
        "content": `
            <p class="my-5">
              David Li<br>
              ${secrets('config_address')}<br>
              E-Mail: <a rel="nofollow" href="mailto:hack@arrrg.de">hack@arrrg.de</a>
            </p>
        `
    },
    "de": {
        "heading": "Kontakt / Impressum",
        "content": `
            <p class="my-5">
              David Li<br>
              ${secrets('config_address')}<br>
              E-Mail: <a rel="nofollow" href="mailto:hack@arrrg.de">hack@arrrg.de</a>
            </p>
        `
    }
}